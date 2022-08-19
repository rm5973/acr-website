function Body(){
    return(
        <div className="bg-gokart-image w-full h-[50vw] bg-cover bg-centre items-center	px-4 flex items-center	">
            <div>
             <h1 class="text-[5.625vw] text-neutral-50 ">AutoCreed</h1> {/*vw for responsive website */}
            <h2 class="text-[3.75vw] text-neutral-50 text-left">Racing</h2>
            <h3 class="text-[2.8125vw] text-neutral-50 text-left">To be a team above all and above all a team.</h3>
            </div>
            
            <div class="bg-red-400 h-full"></div> {/*second page*/}
            <div class="h-full bg-red-500">
            <div class="grid grid-cols-1 divide-y divide-yellow-00">
 
            <div class="shadow-xl border-t-2 border-white-500"></div>
            <div class ="shadow-xl border-t-2 border-white-500 text-white
  text-gray-200 text-4xl p-4">what does acr do?</div>
             <div class="shadow-xl border-t-2 border-white-50"></div>
</div>
</div>
<div class="h-full bg-slate-800">black</div>{/*third page*/}
/*body*/ <nav>
<ul className='hidden md:flex gap-14 p- uppercase bg-white/10 '>
            <li>Home</li>
            <li>About</li>
            <li>Departments</li>
            <li>Team</li>
            <li>Achievements</li>
            
        </ul>
        </nav>

        </div>
    )
}

export default Body