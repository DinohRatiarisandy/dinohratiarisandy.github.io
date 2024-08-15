import FacebookIcon from './icons/FacebookIcon'
import GithubIcon from './icons/GithubIcon'

function Header() {
  return (
    <div className='flex border-b border-gray-700 justify-between items-center sticky'>
      <p className='flex-1 my-4'>Dinoh RATIARISANDY</p>
      <div className='flex gap-4 items-center my-4'>
        <button className='ring-1 ring-gray-500 p-1 rounded hover:bg-gray-700'>
          <a href='https://github.com/DinohRatiarisandy'>
            <GithubIcon size={18} title='GitHub'/>
          </a>
        </button>
        <button className='ring-1 ring-gray-500 p-1 rounded hover:bg-gray-700'>
          <a href='https://facebook.com/ratiarisandy'>
            <FacebookIcon size={18} title='Facebook'/>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Header