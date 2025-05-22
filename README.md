# CollabSphere - AI-Powered Community Chat Platform

CollabSphere is a full-stack, asynchronous communication platform that combines real-time chat capabilities with AI-powered features for enhanced community interaction.

## 🌟 Features

- Real-time text and voice chat
- Group creation and management
- Community discussions
- AI-powered features:
  - Discussion summarization
  - Content moderation
  - Quiz generation from discussions
  - Smart topic suggestions

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- Tailwind CSS
- Socket.IO Client
- TypeScript

### Backend
- FastAPI (Python)
- WebSockets
- Redis Pub/Sub
- PostgreSQL

### AI Integration
- GPT-4 (OpenAI)
- Whisper (Voice transcription)

### Infrastructure
- AWS (EKS, S3, RDS)
- Docker
- Kubernetes
- Terraform
- GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- Docker
- AWS CLI
- Terraform

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CollabSphere.git
cd CollabSphere
```

2. Set up the frontend:
```bash
cd frontend
npm install
npm run dev
```

3. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

## 📦 Project Structure

```
CollabSphere/
├── frontend/           # Next.js frontend application
├── backend/           # FastAPI backend application
├── infrastructure/    # Terraform configurations
├── docker/           # Docker configurations
└── ci/              # GitHub Actions workflows
```

## 🔧 Development

- Frontend runs on: http://localhost:3000
- Backend API runs on: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## 📝 License

MIT License - see LICENSE file for details 