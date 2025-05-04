import { Link } from "react-router-dom";


export default function Error () {
    return(

        <>
            <div className="bg-[#f5eee665] flex flex-col items-center justify-center h-dvh ">
                <h3 className="text-2xl font-bold text-gray-700">Ooops...How did you get here?🤔</h3>
                <p>Take me back 🪷</p>
                <button className="flex items-center bg-[#e4a1a0c4] text-[#504f4e] px-4 py-1 rounded hover:bg-[#f5aaa8]">
                    <Link to="/">Home</Link>
                </button>
            </div>

        </>
    )

}