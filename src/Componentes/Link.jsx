import {EVENTS} from './const';

export function navigate(href)
{
  window.history.pushState({}, '', href);
  const navEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navEvent);
}   

export function Link ({target , to, ...props})
{
    const handleCLick = (event) => {
        
        const isMainEvent = event.button === 0 
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const inManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isModifiedEvent && inManageableEvent)
        {
            event.preventDefault()
            navigate(to)
        }
    }
    return <a onClick= {handleCLick} href={to} {...props}/>
}