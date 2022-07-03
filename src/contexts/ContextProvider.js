import React,{createContext,useContext,useState} from 'react'

const StateContext = createContext();

//分别对应navbar的四个弹窗状态
export const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [isClicked,setIsClicked] = useState(initialState)
    const [screenSize,setScreenSize] = useState(null)

    const handleClick = (clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }

    return (
        <StateContext.Provider
        value={
            {
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,setScreenSize
            }
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext)