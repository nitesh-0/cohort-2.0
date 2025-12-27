"use client"

export function AdminComponent({children}: {children: string}){

    return <div>
        <button onClick={() => {
            alert(`you just clicked ${children} button`)
        }}>
            {children}
        </button>
    </div>

}