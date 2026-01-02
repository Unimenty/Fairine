# RAG Chatbot with Gemini and LangChain

This project is a command-line retrieval-augmented generation (RAG) chatbot that uses a local PDF document as its primary knowledge source. It leverages Google's Gemini Pro model, LangChain for orchestration, and a local FAISS vector store for efficient document retrieval.

## How It Works

1.  **Ingestion:** The `ingest.py` script processes a PDF file (`source.pdf`). It splits the document into smaller text chunks, generates embeddings (numerical representations) for each chunk using Google's embedding model, and stores them in a local FAISS vector store.
2.  **Chat:** The `app.py` script loads the vector store and takes a user's question. It retrieves the most relevant text chunks from the store and combines them with the original question into a prompt for the Gemini Pro model, which then generates a well-informed answer.

## Requirements

*   Python 3.8+
*   A Google API key with the Gemini API enabled.

## Setup

1.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

2.  **Set Your API Key:**
    You must set your Google API key as an environment variable.
    ```bash
    export GOOGLE_API_KEY="your_google_api_key_here"
    ```

3.  **Add Your Document:**
    Replace the placeholder `source.pdf` file in this directory with the PDF document you want to use as the knowledge source.

## Usage

1.  **Ingest the Document:**
    Before you can chat, you must process your PDF and create the vector store.
    ```bash
    python ingest.py
    ```
    This will create a `faiss_index` directory containing the vector store.

2.  **Run the Chatbot:**
    You can run the chatbot in two ways:

    *   **Single Question Mode:**
        ```bash
        python app.py "What is the main topic of this document?"
        ```

    *   **Interactive Mode:**
        ```bash
        python app.py
        ```
        This will start a session where you can ask multiple questions. Type `exit` to end the conversation.

---
Built with Python, LangChain, and the Gemini API.
