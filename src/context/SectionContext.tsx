import React from "react";
import Section from "../domain/section/Section";
import Chapter from "../domain/course/Chapter";

type ContectTypes = {
    section: Section
    chapter: Chapter
}

export const SectionContext = React.createContext<ContectTypes|undefined>(undefined)