import { Select, Space, Typography } from "antd";
import React, { useState } from "react";
const DependentDropDown = () => {
  const SALARY_RANGE = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];
  const [salaryFrom, setSalaryFrom] = useState<any>();
  const [salaryTo, setSalaryTo] = useState<any>();
  const [manga, setManga] = useState<number>();

  const titlesList = [
    { id: 39, name: "Naruto shippuden", tacgia: "kishimoto" },
    {
      id: 69,
      name: "One Piece",
      tacgia: "oda",
    },
  ];

  const charactersList = [
    { id: 1, name: "Naruto", idTitle: 39, tacgia: "kishimoto" },
    { id: 2, name: "Hinata", idTitle: 39, tacgia: "kishimoto" },
    { id: 3, name: "Zoro", idTitle: 69, tacgia: "oda" },
    { id: 4, name: "Robin", idTitle: 69, tacgia: "oda" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Typography.Title>Select Dependent</Typography.Title>
      <Space direction="horizontal">
        <Select
          //   value={salaryFrom}
          //   onChange={(value) => {
          //     setSalaryFrom(value);
          //     if (value > salaryTo) {
          //       setSalaryTo(null);
          //     }
          //   }}
          placeholder="Salary from"
          //   options={SALARY_RANGE.map((salary) => {
          //     return {
          //       label: `$${salary}`,
          //       value: salary,
          //     };
          //   })}
          value={manga}
          onChange={(value) => {
            setManga(value);
            //   if (value > salaryTo) {
            //     setSalaryTo(null);
            //   }
          }}
          options={titlesList.map((list) => {
            return {
              label: list.name,
              value: list.id,
            };
          })}
        />
        <Select
          //   value={salaryTo}
          //   onChange={(value) => setSalaryTo(value)}
          placeholder="Salary to"
          //   options={SALARY_RANGE.map((salary) => {
          //     return {
          //       label: `$${salary}`,
          //       value: salary,
          //     };
          //   }).filter((salary) => salary.value > salaryFrom)}

          options={charactersList
            .map((character) => {
              return {
                label: `${character.name}`,
                value: character.idTitle,
                key: character.id,
              };
            })
            .filter((item) => item.value === manga)}
        />
      </Space>
    </div>
  );
};
export default DependentDropDown;
