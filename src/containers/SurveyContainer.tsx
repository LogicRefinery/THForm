import React from "react";
import { useSelector } from "react-redux";
import Survey from "../components/surveyItem/Survey";
import type { Survey as SurveyType } from "../model/survey";
import { useAppSelector } from "../redux/hooks";
import { selectSurvey } from "../redux/slices/surveySlice";

function SurveyContainer() {
  const surveys = useSelector(selectSurvey);

  return (
    <>
      {surveys.map((item: SurveyType, index: number) => {
        return (
          <Survey
            key={item.id}
            index={index}
            id={item.id}
            title={item.surveyTitle}
            description={item.description}
            questions={item.questions}
          />
        );
      })}
    </>
  );
}

export default SurveyContainer;
