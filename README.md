# ♟️ ChessMaster (Real-Time Chess Game)

## Overview
This project is a **real-time multiplayer chess game** built using **Node.js, Express.js, Socket.io, and Chess.js**. The game allows two players to connect and play online with synchronized moves and game validation.

## Features
- **Multiplayer Chess** – Play with another player in real-time.
- **Live Move Updates** – Instant synchronization using WebSockets.
- **Chess Rules & Move Validation** – `chess.js` handles move legality, turn-based play, checkmate, and stalemate detection.
- **Interactive UI** – A visually appealing chessboard rendered on the frontend.
- **WebSockets Integration** – `Socket.io` ensures smooth real-time communication between players.
- **Game Over Detection** – Automatic checkmate, stalemate, and draw detection.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **WebSockets**: Socket.io
- **Game Logic**: Chess.js (for move validation and rules enforcement)

## Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/codeypas/ChessMaster.git
cd ChessMaster
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Server
```bash
node server.js
```

### 4️⃣ Open the Game
- Open your browser and go to `http://localhost:3000`.
- Share the URL with another player to start a game.

## How It Works
1. **Player 1 joins the game** – The chessboard is initialized.
2. **Player 2 connects** – The game begins when both players are online.
3. **Players take turns** – Moves are validated using Chess.js.
4. **Real-time updates** – Each move is broadcasted via Socket.io.
5. **Game Over detection** – The game ends on checkmate, stalemate, or draw.


## Future Enhancements
- ✅ Add player chat functionality
- ✅ Implement AI-based opponent mode
- ✅ Add match history & leaderboard
- ✅ Enhance UI with animations and themes

## License
This project is for educational purposes. Use responsibly.

## Contributing
Feel free to fork the repo, submit issues, or create pull requests for improvements!

---
## 👨‍💻 Author  

**Bijay Adhikari**  
📌 [GitHub Profile](https://github.com/codeypas)  
📧 Contact: bjbestintheworld@gmail.com  

