import './contact.css'
import ListsContacts from './ListsContacts'



const Contacts = () => {
  const copyText = (text) =>{
    if(text.includes('https')){
      window.open(text)
    }
    else if(text.includes("Julianna's")){
      const link = document.createElement('a');
      link.href = '/Gillo_resume.pdf'; 
      link.download = "Gillo_resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Text copied: ${text}`);
      })
      .catch(err =>{
        console.log('failed to copy text', err)
      })
    }
  }

  return (
    <>
    <div className='Head'>
        <div className='Header'>Contacts</div>
        <svg className='socials' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z" fill="#99204A"></path> <path d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z" fill="#99204A"></path> </g></svg>
    </div>
    <div className='contactsContainer'>
      <div className='divider1'/>
      {ListsContacts().map((el, index)=> (
        <div className={`Contacts${index}`} key={index}>
          <div className={`wire${index}`} />
          <button onClick={()=> copyText(el.contents)} className={`icon${index}`}>
            <span className={`contactsTooltip${index}`}>{el.tooltipContents}</span>
            {el.svg()}
          </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Contacts