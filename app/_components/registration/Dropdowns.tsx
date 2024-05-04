import React, { useId, useState } from "react";

interface DeptDropdownProps {
  onDeptChange: (dept: string) => void;
}

export function DeptDropdown({ onDeptChange }: DeptDropdownProps) {
  const collegeDeptId = useId();
  const [selectedDept, setSelectedDept] = useState('');

  const handleDeptChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = event.target.value;
    setSelectedDept(dept);
    onDeptChange(dept);
  };
  const test="Hello"

  return (
    <select
      name="selectedDept"
      id={collegeDeptId}
      className="flex text-left items-center bg-sf rounded-md border-none pl-5 pr-5 text-gray-400 text-xs md:text-sm md:py-2 lg:h-12 lg:rounded-lg"
      value={selectedDept}
      onChange={handleDeptChange}
    >
      <option value="" disabled hidden className="text-gray-400">
        Select College Department
      </option>
      <option value="CAFAD">CAFAD</option>
      <option value="CICS">CICS</option>
      <option value="COE">COE</option>
      <option value="CIT">CIT</option>
    </select>
  );
}

export function ProgramDropdown(dep:any) {
  const collegeProgId = useId();
  const [selectedDept, setSelectedDept] = useState('');

  const handleDeptChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = event.target.value;
    setSelectedDept(dept);
  };

  const programOptions: { [key: string]: string[] } = {
    CAFAD: [''],
    CICS: ['BSCS', 'BSIT'],
    CIT: [''],
    COE: ['BSCE', 'BSME', 'BSCOE']
  };

  return (
    <div className="w-full flex flex-col ml-7 mr-7 gap-2 mt-8
    lg:gap-3 lg:mt-6 lg:ml-12 lg:mr-12 xl:mt-12">
      {/* <DeptDropdown onDeptChange={setSelectedDept} /> */}
      <select
        name="selectedProgram"
        id={collegeProgId}
        className="flex text-left items-center bg-sf rounded-md border-none pl-5 pr-5 py-2 text-gray-400 text-xs md:text-sm md:py-2 lg:h-12 lg:rounded-lg"
      >

        {/* not working */}
        <option value="" disabled hidden className="text-gray-400">
          Select College Program
        </option>

        {programOptions[selectedDept]?.map((program) => (
          <option key={program} value={program}>
            {program}
          </option>
        ))}

      </select>
    </div>
  );
}