import os
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
import google.generativeai as genai

# --- Configuration ---
# You must set your GOOGLE_API_KEY as an environment variable for this script to work.
# For example:
# export GOOGLE_API_KEY="your_api_key_here"

PDF_SOURCE_PATH = "rag_chatbot/source.pdf"
VECTOR_STORE_PATH = "rag_chatbot/faiss_index"

# --- Main Execution ---
def main():
    """
    Main function to ingest the source PDF and create a vector store.
    """
    # 1. Check for API Key
    # The GoogleGenerativeAIEmbeddings constructor now handles the API key check internally.
    # If the key is not found, it will raise a clear error.

    # 2. Validate the source PDF
    if not os.path.exists(PDF_SOURCE_PATH):
        print(f"Error: Source PDF not found at '{PDF_SOURCE_PATH}'")
        return
    if os.path.getsize(PDF_SOURCE_PATH) == 0:
        print(f"Error: The file at '{PDF_SOURCE_PATH}' is empty.")
        return

    # 3. Load the PDF document
    print("Loading document...")
    try:
        loader = PyPDFLoader(PDF_SOURCE_PATH)
        docs = loader.load()
    except Exception as e:
        print(f"Error loading PDF: {e}")
        return

    # 3. Split the document into manageable chunks
    print("Splitting document into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    documents = text_splitter.split_documents(docs)

    # 4. Initialize the embeddings model
    print("Initializing embeddings model...")
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

    # 5. Create the FAISS vector store from the chunks
    print("Creating vector store...")
    vector_store = FAISS.from_documents(documents, embeddings)

    # 6. Save the vector store locally
    print(f"Saving vector store to {VECTOR_STORE_PATH}...")
    vector_store.save_local(VECTOR_STORE_PATH)

    print("\nIngestion complete! The vector store is ready.")

if __name__ == "__main__":
    main()
