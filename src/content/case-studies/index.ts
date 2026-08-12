import type { CaseStudyContent } from "@/types/case-study-content";
import dentalImplantSpecialistCalifornia from "./dental-implant-specialist-california";
import sixLocationDsoTexas from "./6-location-dso-texas";
import sportsChiropracticFlorida from "./sports-chiropractic-florida";

/**
 * Content registry. Adding a new case study = adding a record here
 * (or dropping in a JSON file that conforms to `CaseStudyContent`).
 * The `template` field on each record decides which template renders it.
 */
export const caseStudyContent: Record<string, CaseStudyContent> = {
  [dentalImplantSpecialistCalifornia.slug]: dentalImplantSpecialistCalifornia,
  [sixLocationDsoTexas.slug]: sixLocationDsoTexas,
  [sportsChiropracticFlorida.slug]: sportsChiropracticFlorida,
};

export function findCaseStudyContent(slug?: string): CaseStudyContent | undefined {
  return slug ? caseStudyContent[slug] : undefined;
}
