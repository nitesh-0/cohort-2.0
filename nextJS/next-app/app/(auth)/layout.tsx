

export default function Layout({children} : {
    children: React.ReactNode
}){
    return <div>
        <div className="p-4 border-b">
            Banner for all pages under signin page
        </div>
        {children}
    </div>
     
}