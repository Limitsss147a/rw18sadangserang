import { Facility } from "@/data/facilities";
import FacilityHero from "./FacilityHero";
import SDGsBadges from "./SDGsBadges";
import ProcessSteps from "./ProcessSteps";
import PhotoGallery from "./PhotoGallery";
import LocationMap from "./LocationMap";

interface FacilityDetailTemplateProps {
  facility: Facility;
}

export default function FacilityDetailTemplate({
  facility,
}: FacilityDetailTemplateProps) {
  return (
    <article className="flex flex-col w-full bg-white">
      {/* 1. Hero with background photo & quick specs */}
      <FacilityHero facility={facility} />

      {/* 2. SDGs Badges & Contextual Explanation */}
      <SDGsBadges
        sdgs={facility.sdgs}
        facilityName={facility.name}
      />

      {/* 3. Visual Workflow & Process Steps */}
      <ProcessSteps
        steps={facility.steps}
        facilityName={facility.name}
        facilityColor={facility.color}
      />

      {/* 4. Photo Gallery with Fullscreen Lightbox */}
      <PhotoGallery
        images={facility.images}
        facilityName={facility.name}
      />

      {/* 5. Location, Etiquette & Directions */}
      <LocationMap facility={facility} />
    </article>
  );
}
