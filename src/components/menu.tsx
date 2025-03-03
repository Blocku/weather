import { X } from "lucide-react"

function Menu(props: any){

    

    return(
        <main className="absolute left-0 top-0 h-dvh w-full bg-white p-3" >
            <div>
                <button onClick={() => props.setMenu(false)} >
                    <X color='black' size={25} />
                </button>
            </div>
            <div>
                <label>
                    <span className="text-black text-lg" >Pick a city</span>
                    <input type="text" placeholder="текст..." />
                </label>
            </div>
            <ul >
                <li></li>
            </ul>
        </main>
    )
}

export default Menu