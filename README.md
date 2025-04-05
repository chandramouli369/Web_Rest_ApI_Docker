
# Task Management System – Dockerized Full Stack App

This repository contains the **Task Management System** application with:

- Angular Frontend (inside `frontend/`)
- .NET Core Web API Backend (inside `backend/`)

Both projects are containerized using Docker.

---

##  Project Structure

```
/frontend
  ├── Dockerfile
  └── [Angular App Files]

/backend
  ├── Dockerfile
  └── [ASP.NET Core Web API Files]
```

---

##  Docker Setup

###  Backend Setup (ASP.NET Core)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Build the Docker image:
   ```bash
   docker build -t my-api .
   ```

3. Run the container (ensure SQL Server is reachable):
   ```bash
   docker run -d -p 5296:80 --name my-api-container \
     -e "ConnectionStrings__DefaultConnection=Server=host.docker.internal;Database=TaskDb;User Id=myuser;Password=StrongPassword123!;TrustServerCertificate=True;" \
     my-api
   ```

### Frontend Setup (Angular)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Build the Docker image:
   ```bash
   docker build -t my-angular-app .
   ```

3. Run the container:
   ```bash
   docker run -d -p 4200:80 --name my-angular-container my-angular-app
   ```

---

##  Verifying the Application

- Backend API: [http://localhost:5296/api/Tasks](http://localhost:5296/api/Tasks)
- Frontend App: [http://localhost:4200](http://localhost:4200)

---



##  Pushing to GitHub

- Keep your `frontend/` and `backend/` folders clean with only essential files and Dockerfile.
- Create a `.dockerignore` file in each to skip `node_modules`, `bin`, `obj`, etc.
- Push your project using:
  ```bash
  git init
  git remote add origin https://github.com/your-username/task-management-system.git
  git add .
  git commit -m "Initial commit with Docker setup"
  git push -u origin main
  ```

---

##  Notes

- Make sure your SQL Server is running and accessible.
- If you get SSL/certificate errors, use `TrustServerCertificate=True` in the connection string.
- Use `host.docker.internal` to access services on your host machine (Windows/Mac only).

---

##  Author

Name Naga Chandra Mouli Thammineni
  
