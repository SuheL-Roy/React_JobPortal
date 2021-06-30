import React, { useEffect, useState } from "react";
import { vacancies as jobs } from "../data";
import Vacancy from "../Component/Vacancy";
import Createjob from "../Component/Createjob";

export default function Home() {
    const [vacancies, setvacanice] = useState([]);

    useEffect(()=> {
        setvacanice(jobs);

     // console.log(jobs);
    },[]);

    const handleSubmit = (form) => {
        setvacanice([...vacancies,form])
        console.log(form);

    }
    const handledelete =(id) => {
        const vacensise = vacancies.filter(vacancy => vacancy.id !== id);
        setvacanice(vacensise);

    }
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">Apply for any vacanvies below</p>
        </div>
      </section>
      <section>
         <Createjob submit={handleSubmit}/>
      </section>
     <section>
      {
          vacancies.map((vacancy) => {
              return(
                    <Vacancy key={vacancy.id}
                     vacancy={vacancy}
                     handledelete={handledelete}
                    />
              );
          })
      }
      </section>
      </>
  );
}
