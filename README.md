# 📱 DigiOffsider

**DigiOffsider** is a MERN-based web application that helps users uncover detailed information about unknown charges they find on their financial statements. Whether it's a vague transaction name or an unfamiliar charge, DigiOffsider empowers users to search and crowdsource charge details, making financial transparency more accessible.

---

## 🚀 Features

- 🔍 **Charge Lookup** – Search unknown charge names to find descriptions, sources, and user-submitted insights.
- 🧠 **Crowdsourced Knowledge** – Contribute your own knowledge about charges and benefit from community contributions.
- 💬 **User Feedback System** – Users can comment, rate, or confirm charge information to improve accuracy.
- 📊 **Trending Charges** – See the most searched charges or recent additions.

---

## 🛠️ Tech Stack

**Frontend:**

- React
- Redux (if used)
- Tailwind CSS / Bootstrap (custom styling)

**Backend:**

- Node.js
- Express.js

**Database:**

- MongoDB (with Mongoose ORM)

**Other Tools:**

- JWT for authentication (if included)
- Axios for HTTP requests
- dotenv for environment management

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mehulk20/digiOffsider.git
cd digiOffsider
```

### 2. Setup Backend

```bash
cd server
npm install
```

- Create a `.env` file in the `server/` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Setup Frontend

```bash
cd ../client
npm install
```

- Create a `.env` file in the `client/` directory:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### 4. Run the App

#### Start Backend:

```bash
cd server
npm run dev
```

#### Start Frontend:

```bash
cd ../client
npm start
```

---

## 🧪 Usage

1. Go to `http://localhost:3000`.
2. Use the search bar to enter a charge name (e.g., "ZYNGA", "SPOTIFY").
3. Browse user-submitted results or contribute your own insight.
4. Log in to save searches, post comments, and interact with the community (if auth is enabled).

---

## 🧩 Future Enhancements

- Advanced filtering and sorting
- Admin dashboard for moderation
- Machine learning suggestions for matching charges
- Browser extension for quick lookup

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)
