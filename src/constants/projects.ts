import apiImg from "../assets/thumbnails/api-img.svg"
import img2048 from "../assets/thumbnails/2048-img.png"
import tetrisImg from "../assets/thumbnails/tetris-img.png"
import sokobanImg from "../assets/thumbnails/sokoban-img.png"
import eightPuzzleImg from "../assets/thumbnails/eight-puzzle.png"
import wannaTalkImg from "../assets/thumbnails/wanna-talk-img.svg"
import skyscraperImg from "../assets/thumbnails/skyscraper-img.png"
import connectFourImg from "../assets/thumbnails/connect-4-img.png"
import tictactoeImg from "../assets/thumbnails/tic-tac-toe-img.svg"
import geneticAlgoImg from "../assets/thumbnails/genetic-algo-img.png"

export const PROJECTS = [
   {
      thumbnail: wannaTalkImg,
      title: "Wanna-Talk ?",
      description:
         "This is a realtime chat application using ReactJS ∙ Firebase.",
      url: "https://wanna-talk-c7e4e.web.app",
      isNew: true,
   },
   {
      thumbnail: connectFourImg,
      title: "Connect-4 with AI",
      description: "Connect-4 game with unbeatable bot (AI).",
      url: "https://DinohRatiarisandy.github.io/connect-four-game-with-AI",
      isNew: true,
   },
   {
      thumbnail: img2048,
      title: "2048-game with AI",
      description:
         "2048-game with expectimax algorithm for the autoplay (botSolver/AI).",
      url: "https://dinoh-sandys.itch.io/2048-with-expectimax",
      isNew: true,
   },
   {
      thumbnail: tictactoeImg,
      title: "Tic-Tac-Toe unbeatable",
      description: "The old tic-tac-toe game with unbeatable AI.",
      url: "https://DinohRatiarisandy.github.io/TicTacToeJS/",
   },
   {
      thumbnail: eightPuzzleImg,
      title: "8-puzzle game",
      description:
         "8-puzzle game made with pygame using A* to solve the puzzle.",
      url: "https://dinoh-sandys.itch.io/8-puzzle-game-with-ai",
   },
   {
      thumbnail: apiImg,
      title: "Sudoku API",
      description: "Sudoku solver and sudoku generator API.",
      url: "https://github.com/DinohRatiarisandy/Sudoku-API",
   },
   {
      thumbnail: tetrisImg,
      title: "Tetris game",
      description: "Tetris game clone built with PyGame.",
      url: "https://github.com/DinohRatiarisandy/Tetris-game/releases",
   },
   {
      thumbnail: sokobanImg,
      title: "Sokoban-Remake",
      description:
         "Remake the old game Sokoban with godot engine. Woooww ! Nice look !",
      url: "https://dinoh-sandys.itch.io/sokoban-remake",
   },
   {
      thumbnail: skyscraperImg,
      title: "Skyscrapers-game solver",
      description: "Skyscrapers game solver.",
      url: "https://github.com/DinohRatiarisandy/Skyscrapers_Game_AI",
   },
   {
      thumbnail: geneticAlgoImg,
      title: "Genetic-Algorithm--Knapsack-problem",
      description: "Knapasack problem solved by the genetic algorithm.",
      url: "https://github.com/DinohRatiarisandy/Genetic-Algorithm--Knapsack-problem/releases",
   },
]
