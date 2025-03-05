# Clone the repository
git clone https://github.com/VP-TT/MERN-bookstore-project.git

# Install backend dependencies
cd bookstore-project/backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Set up environment variables
# Copy .env.example to .env and fill in your details

# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev

# Run both concurrently (if using concurrently)
npm run dev:full