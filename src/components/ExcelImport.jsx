import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { processExcelData } from '../utils/backlogService';

const ExcelImport = ({ onDataImported }) => {
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        const processedData = processExcelData(jsonData);
        onDataImported(processedData);
      } catch (error) {
        console.error("Error processing Excel file:", error);
        alert("Error processing Excel file. Please check the format.");
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
      setIsLoading(false);
      alert("Error reading file");
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-file-excel'} me-2`}></i>
          {isLoading ? 'Processing...' : 'Import Backlog from Excel'}
        </h5>
      </div>
      <div className="card-body">
        <div className="input-group">
          <input 
            type="file" 
            className="form-control" 
            accept=".xlsx, .xls" 
            onChange={handleFileUpload}
            disabled={isLoading}
            id="excelFileInput"
          />
          <button 
            className="btn btn-outline-light" 
            onClick={() => document.getElementById('excelFileInput').click()}
            disabled={isLoading}
          >
            <i className="fas fa-upload me-1"></i> Browse
          </button>
        </div>
        {fileName && !isLoading && (
          <div className="mt-2 text-success">
            <i className="fas fa-check-circle me-1"></i>
            {fileName}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelImport;