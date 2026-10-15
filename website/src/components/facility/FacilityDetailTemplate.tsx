import { Facility } from "@/data/facilities";
import FacilityHero from "./FacilityHero";
import SDGsBadges from "./SDGsBadges";
import ProcessSteps from "./ProcessSteps";
import PhotoGallery from "./PhotoGallery";
import LocationMap from "./LocationMap";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FacilityDetailTemplateProps {
  facility: Facility;
}

export default function FacilityDetailTemplate({
  facility,
}: FacilityDetailTemplateProps) {
  return (
    <article className="flex flex-col w-full bg-white">
      {/* 1. Hero with background photo & quick specs */}
      <ScrollReveal delay={0.1} y={0}>
        <FacilityHero facility={facility} />
      </ScrollReveal>

      {/* 2. SDGs Badges & Contextual Explanation */}
      <ScrollReveal delay={0.15}>
        <SDGsBadges
          sdgs={facility.sdgs}
          facilityName={facility.name}
        />
      </ScrollReveal>

      {/* 3. Visual Workflow & Process Steps */}
      <ScrollReveal delay={0.2}>
        <ProcessSteps
          steps={facility.steps}
          facilityName={facility.name}
          facilityColor={facility.color}
        />
      </ScrollReveal>

      {/* 4. Photo Gallery with Fullscreen Lightbox */}
      <ScrollReveal delay={0.25}>
        <PhotoGallery
          images={facility.images}
          facilityName={facility.name}
        />
      </ScrollReveal>

      {/* 5. Location, Etiquette & Directions */}
      <ScrollReveal delay={0.3}>
        <LocationMap facility={facility} />
      </ScrollReveal>
    </article>
  );
}
