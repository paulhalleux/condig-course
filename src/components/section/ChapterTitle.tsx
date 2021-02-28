import React from "react";
import Chapter from "../../domain/course/Chapter";

type SectionProps = {
    chapter: Chapter
}

export default function ChapterTitle({chapter}: SectionProps){
    const link = `${window.location.host}/course/${chapter.category.course.slug}/${chapter.category.slug}#${chapter.id}`;

    const copy = (url: string) => {
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    return <h3 id={`${chapter.id}`} className="copyable-element chapter-title">
        <span className="link-button" onClick={() => copy(link)}>
            <i className="fa fa-link"/>
        </span>
        {chapter.order}. {chapter.name}
    </h3>
}