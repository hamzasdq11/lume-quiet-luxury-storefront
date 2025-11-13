import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Meet the Team
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              The minds behind LUME, dedicated to crafting exceptional stationery for the urban professional.
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-sm">
            <img 
              src={teamPhoto} 
              alt="LUME Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
