import React, { useCallback, useState } from "react";
import Accordion, { AccordionTypes } from "devextreme-react/accordion";
import {
  ExperienceItem,
  ExperienceItemTitle,
} from "../components/ExperienceItem";
import { sortedCompanies } from "../data/ExperienceData";
import "./Experience.css";

const Experience = () => {
  const [selectedItems, setSelectedItems] = useState(sortedCompanies);

  const selectionChanged = useCallback(
    (e: AccordionTypes.SelectionChangedEvent) => {
      let newItems = [...selectedItems];
      e.removedItems.forEach((item) => {
        const index = newItems.indexOf(item);
        if (index >= 0) {
          newItems.splice(index, 1);
        }
      });
      if (e.addedItems.length) {
        newItems = [...newItems, ...e.addedItems];
      }
      setSelectedItems(newItems);
    },
    [selectedItems, setSelectedItems]
  );

  return (
    <div>
      <hr />
      <div className="my-16">
        <h1 className="heading text-center ">Experiences</h1>
        <div className="w-1/2 mx-auto mt-10" id="accordion">
          <Accordion
            dataSource={sortedCompanies}
            collapsible={true}
            multiple={true}
            animationDuration={500}
            selectedItems={selectedItems}
            onSelectionChanged={selectionChanged}
            itemTitleRender={ExperienceItemTitle}
            itemRender={ExperienceItem}
            focusStateEnabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
