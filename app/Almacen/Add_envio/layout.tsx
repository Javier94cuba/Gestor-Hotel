export default function Layout({children} : {children : React.ReactNode}){
    return(
       <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">

       <div className="flex-grow md:overflow-y-auto md:p-8 md:bg-white w-screen">
        {children}
       </div>
       </div>
    )
}