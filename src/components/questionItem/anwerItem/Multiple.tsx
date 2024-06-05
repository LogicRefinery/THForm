import React, { useRef } from "react";
import { styled } from "styled-components";
import { Option, QuestionMethodType } from "../../../model/survey";

function Multiple({
  id,
  options,
  onAddOption,
  onRemoveOption,
  onChangeOption,
  optionDragStart,
  optionDragEnter,
  drop,
}: {
  id: string;
  options: Option[] | null;
  onAddOption: (id: string, other?: boolean) => void;
  onRemoveOption: (id: string, optionId: string) => void;
  onChangeOption: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    optionId: string
  ) => void;
  optionDragStart: (idx: number, id: string) => void;
  optionDragEnter: (idx: number) => void;
  drop: (isOptions: boolean) => void;
}) {
  const hasOtherOption = options?.find((option) =>
    option.hasOwnProperty("other")
  );

  return (
    <ul>
      {options &&
        options.map((option: Option, index: number) => {
          return (
            <MultipleWrap
              key={option.id}
              draggable={option.other ? false : true}
              onDragStart={() => optionDragStart(index, option.id)}
              onDragEnter={() => optionDragEnter(index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={() => {
                drop(true);
              }}
            >
              {option.other ? null : (
                <img src="/drag-icon-small.svg" alt="드래그 아이콘" />
              )}

              <input
                type="checkbox"
                style={option.other ? { marginLeft: "24px" } : {}}
                id={`check_${option.id}`}
              />
              <label htmlFor={`check_${option.id}`} className="sr-only">
                {option.option}
              </label>
              <InputText
                type="text"
                id={option.id}
                value={option.option}
                placeholder={option.other ? "기타" : `선택사항 ${index + 1}`}
                onChange={(e) => {
                  onChangeOption(e, id, option.id);
                }}
              />
              <label htmlFor={option.id} className="sr-only">
                객관식 질문
              </label>
              <Button
                value="X"
                onClick={() => {
                  onRemoveOption(id, option.id);
                }}
              />
            </MultipleWrap>
          );
        })}
      <Button
        value="항목 추가"
        onClick={() => {
          onAddOption(id);
        }}
      />

      {!hasOtherOption ? (
        <>
          or
          <Button
            value="기타 항목 추가"
            onClick={() => {
              onAddOption(id, true);
            }}
          />
        </>
      ) : null}
    </ul>
  );
}

export default Multiple;

const MultipleWrap = styled.li`
  display: flex;
  margin: 0 0 20px 0;
`;

const InputText = styled.input.attrs({ type: "text" })`
  width: 70%;
  font-size: 14px;
  padding: 6px 12px;
  border: none;
  border-bottom: 1px solid #ccc;
  display: block;
`;

const Button = styled.input.attrs({ type: "button" })`
  color: #007bff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transition: background-color 0.3s ease;
    background: #007bff;
    color: white;
  }
`;
