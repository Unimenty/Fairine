import os
import sys
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import FAISS
from langchain_classic.chains import create_history_aware_retriever, create_retrieval_chain
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage

# --- Configuration ---
# You must set your GOOGLE_API_KEY as an environment variable for this script to work.
# For example:
# export GOOGLE_API_KEY="your_api_key_here"

VECTOR_STORE_PATH = "rag_chatbot/faiss_index"

# --- Main Execution ---
def main():
    """
    Main function to run the RAG chatbot.
    """
    # 1. Check for API Key
    if "GOOGLE_API_KEY" not in os.environ:
        print("Error: GOOGLE_API_KEY environment variable not set.")
        sys.exit(1)

    # 2. Check if the vector store exists
    if not os.path.exists(VECTOR_STORE_PATH):
        print(f"Error: Vector store not found at {VECTOR_STORE_PATH}.")
        print("Please run the ingest.py script first to create it.")
        sys.exit(1)

    # 3. Initialize models and retriever
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.load_local(VECTOR_STORE_PATH, embeddings, allow_dangerous_deserialization=True)
    llm = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.7)
    retriever = vector_store.as_retriever()

    # 4. Create a prompt for contextualizing the question
    contextualize_q_system_prompt = (
        "Given a chat history and the latest user question "
        "which might reference context in the chat history, "
        "formulate a standalone question which can be understood "
        "without the chat history. Do NOT answer the question, "
        "just reformulate it if needed and otherwise return it as is."
    )
    contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )
    history_aware_retriever = create_history_aware_retriever(
        llm, retriever, contextualize_q_prompt
    )

    # 5. Create a prompt for answering the question
    qa_system_prompt = (
        "You are an assistant for question-answering tasks. "
        "Use the following pieces of retrieved context to answer "
        "the question. If you don't know the answer, just say that "
        "you don't know. Use three sentences maximum and keep the "
        "answer concise."
        "\n\n"
        "{context}"
    )
    qa_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", qa_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )
    question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)

    # 6. Create the final retrieval chain
    rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)

    # 7. Main interaction loop
    chat_history = []

    if len(sys.argv) > 1:
        question = " ".join(sys.argv[1:])
        print(f"\nThinking about: '{question}'...")
        result = rag_chain.invoke({"input": question, "chat_history": chat_history})
        print("\nAnswer:")
        print(result["answer"])
    else:
        print("Chatbot is ready. Type 'exit' to quit.")
        while True:
            question = input("\nAsk a question: ")
            if question.lower() == 'exit':
                break

            result = rag_chain.invoke({"input": question, "chat_history": chat_history})
            print("\nAnswer:")
            print(result["answer"])

            # Update chat history
            chat_history.append(HumanMessage(content=question))
            chat_history.append(AIMessage(content=result["answer"]))

if __name__ == "__main__":
    main()
