import React, { useState } from 'react';
import './AnalysisForm.css';

const QualityTestForm = () => {
  const [testResults, setTestResults] = useState({
    test_id: '',
    product_id: '',
    testing_level: '',
    type_of_test: '',
    test_date: '',
    test_results: '',
    permissible_limits: '',
    compliance_status: '',
    testing_location: '',
    testing_equipment: '',
    analyst_name: '',
    ingredient_id: '',
    production_id: '',
    factory_id: '',
    warehouse_id: '',
    retail_distribution_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission
    console.log('Form submitted:', testResults);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestResults({ ...testResults, [name]: value });
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Food Quality Test Form</h2>
      </nav>
        <form onSubmit={handleSubmit}>
        <label>
          Test ID:
          <input type="text" name="test_id" value={testResults.test_id} onChange={handleChange} />
        </label>
        
        <label>
          Product ID:
          <input type="text" name="product_id" value={testResults.product_id} onChange={handleChange} />
        </label>
        
        <label>
          Microbiological Tests:
          <input type="text" name="microbiological_tests" value={testResults.microbiological_tests} onChange={handleChange} />
        </label>
        
        <label>
        Chemical Tests:
          <input type="text" name="chemical_tests" value={testResults.chemical_tests} onChange={handleChange} />
        </label>
        
        <label>
        Physical Tests:
          <input type="text" name="physical_tests" value={testResults.physical_tests} onChange={handleChange} />
        </label>
        
        <label>
        Allergen Tests:
          <input type="text" name="allergen_tests" value={testResults.allergen_tests} onChange={handleChange} />
        </label>
        
        <label>
        Nutritional Tests:
          <input type="text" name="product_id" value={testResults.nutritional_tests} onChange={handleChange} />
        </label>
        
        <label>
        Sensory Tests:
          <input type="text" name="product_id" value={testResults.sensory_tests} onChange={handleChange} />
        </label>

        <label>
        Adulteration Tests:
          <input type="text" name="product_id" value={testResults.adulteration_tests} onChange={handleChange} />
        </label>
        
        <button type="submit">Submit</button>
        <br/>
      </form>
    </div>
  );
};

export default QualityTestForm;
