import Card from "./Card"
import ProjectCard from "./ProjectCard"
import myProfileImg from "../assets/profile/my-profile.jpeg"
import img2048 from "../assets/icon/2048-img.png"
import eightPuzzleImg from "../assets/icon/eight-puzzle.png"
import apiImg from "../assets/icon/api-img.png"
import skyscraperImg from "../assets/icon/skyscraper-img.png"
import tetrisImg from "../assets/icon/tetris-img.png"
import sokobanImg from "../assets/icon/sokoban-img.png"
import geneticAlgoImg from "../assets/icon/genetic-algo-img.png"
import connectFourImg from "../assets/icon/connect-4-img.png"

const PROJECTS = [
   {
      image: geneticAlgoImg,
      title: "Genetic-Algorithm--Knapsack-problem",
      description: "Knapasack problem solved by the genetic algorithm.",
      urlGithub:
         "https://github.com/DinohRatiarisandy/Genetic-Algorithm--Knapsack-problem",
   },
   {
      image: img2048,
      title: "2048-game with AI",
      description:
         "2048-game with expectimax algorithm for the autoplay (botSolver/AI).",
      urlGithub:
         "https://github.com/DinohRatiarisandy/2048-game-with-expectimax",
   },
   {
      image: eightPuzzleImg,
      title: "8-puzzle game",
      description:
         "8-puzzle game made with pygame using A* to solve the puzzle.",
      urlGithub: "https://github.com/DinohRatiarisandy/8-puzzle-game",
   },
   {
      image: apiImg,
      title: "Sudoku API",
      description: "Sudoku solver and sudoku generator API.",
      urlGithub: "https://github.com/DinohRatiarisandy/Sudoku-API",
   },
   {
      image: skyscraperImg,
      title: "Skyscrapers-game solver",
      description: "Solver (resolution algorithm) for the skyscrapers game.",
      urlGithub: "https://github.com/DinohRatiarisandy/Skyscrapers_Game_AI",
   },
   {
      image: tetrisImg,
      title: "Tetris game",
      description: "Tetris game clone built with PyGame.",
      urlGithub: "https://github.com/DinohRatiarisandy/Tetris-game",
   },
   {
      image: sokobanImg,
      title: "Sokoban-Remake",
      description:
         "Remake the old game Sokoban with godot engine. Woooww ! Nice face !",
      urlGithub: "https://github.com/DinohRatiarisandy/Sokoban-Remake",
   },
   {
      image: connectFourImg,
      title: "Connect-4 with AI",
      description: "Connect-4 with AI with unbeatable bot.",
      urlGithub:
         "https://github.com/DinohRatiarisandy/connect-four-game-with-AI",
   },
]

function Projects() {
   return (
      <Card title="Side and fun projects" className="flex flex-[2] flex-col">
         <div className="h-[20rem] overflow-scroll">
            {PROJECTS.map(function (project) {
               return <ProjectCard key={project.title} {...project} />
            })}
         </div>
      </Card>
   )
}

export default Projects
