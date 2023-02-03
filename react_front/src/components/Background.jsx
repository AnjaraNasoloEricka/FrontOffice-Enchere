const Background=()=>{
    return (
        <section id="knowledge-base-search">
                    <div class="row">
                        <div class="col-12">
                            <div class="card knowledge-base-bg text-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/app-assets/images/banner/banner.png'})`}}>
                                <div class="card-body">
                                    <h2 class="text-primary">Bienvenue sur Enchere</h2>
                                    <p class="card-text mb-2">
                                        <span>Un site ou vous trouverez </span><span class="fw-bolder">"Le produit fétiche"</span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    );
}

export default Background;