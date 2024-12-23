import VeloRent from "../img/VeloRent.png";

export const MyProjects = () => {
  return (<>
   <div className="heading">
      <h2 >My projects</h2>
    </div>
    <div className="p-1 gap-3 grid grid-cols-3 mt-5">
      <div className="card">
        <img src={VeloRent} alt="" />
        <h1 className="text-green-500">VeloRent</h1>
        <p className="text-sm">This is a console app project where i created an app where it is possible for an user to login/register
          and rent a car. There are 3 different locations with different cars. The user has the possibility
          to update and cancel his bookings. <br />I am using SQL for the database and Spectre.Console for a better
          design of the console app.
          
        </p>
      </div>
      <div className="card"></div>
      <div className="card" ></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>


    </div>

  </>

  )
}