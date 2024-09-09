

export default function CardProfile(){
    
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="row justify-content-center mt-2"> 
                    <div className="row justify-content-center mt-2"> 
                        {/*Tarjeta 1*/}
                        <div className="col-md-2 mx-1 px-1 mb-2 custom-margin"> 
                            <div className="text-center">
                                <div className="circle-image">
                                    <img src="../assets/pet.jpg" alt="Mascota" />
                                </div>
                                <div className="card-body bg-c1 border-radius">
                                    <h5 className="card-title ">Coco</h5>
                                    <p className="card-text p6">Labrador - 2 años</p>
                                    <p className="card-text p6">Laura Rodriguez</p>
                                </div>
                            </div>
                        </div>
                        {/*Tarjeta 2*/}
                        <div className="col-md-2 mx-1 px-1 mb-2 custom-margin"> 
                            <div className="text-center">
                                <div className="circle-image">
                                    <img src="../assets/pet2.jpg" alt="Mascota" />
                                </div>
                                <div className="card-body bg-c1 border-radius">
                                    <h5 className="card-title">Coco</h5>
                                    <p className="card-text p6">Labrador - 2 años</p>
                                    <p className="card-text p6">Laura Rodriguez</p>
                                </div>
                            </div>
                        </div>
                        {/*Tarjeta 3*/}
                        <div className="col-md-2 mx-1 px-1 mb-2 custom-margin"> 
                            <div className="text-center">
                                <div className="circle-image">
                                    <img src="../assets/pet3.jpg" alt="Mascota" />
                                </div>
                                <div className="card-body bg-c1 border-radius">
                                    <h5 className="card-title">Coco</h5>
                                    <p className="card-text p6">Labrador - 2 años</p>
                                    <p className="card-text p6">Laura Rodriguez</p>
                                </div>
                            </div>
                        </div>
                        {/*Tarjeta 4*/}
                        <div className="col-md-2 mx-1 px-1 mb-2 custom-margin"> 
                            <div className="text-center">
                                <div className="circle-image">
                                    <img src="../assets/pet4.jpg" alt="Mascota" />
                                </div>
                                <div className="card-body bg-c1 border-radius">
                                    <h5 className="card-title">Coco</h5>
                                    <p className="card-text p6">Labrador - 2 años</p>
                                    <p className="card-text p6">Laura Rodriguez</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}