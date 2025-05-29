import React, { useState } from "react";
import { funeralCostsByState } from "./funeralCostsByState";
import { getNationalQuote, getCashValueTable } from "./csvQuoteUtils";

const sellingPoints = [
  "No medical exam required – easy approval",
  "Flexible coverage amounts to fit your needs",
  "Protects your family from financial burden"
];

const states = funeralCostsByState.map(f => f.state).sort();

const FinalExpensePage: React.FC = () => {
  // Simple form state (expand as needed)
  const [form, setForm] = useState({ name: "", age: "", state: "", coverage: "", health: "", email: "" });
  const [selectedState, setSelectedState] = useState("");
  const [burialType, setBurialType] = useState("");

  // Add state for quote slider section
  const [quoteGender, setQuoteGender] = useState<'male' | 'female'>('male');
  const [quoteAge, setQuoteAge] = useState(60);
  const [quoteCoverage, setQuoteCoverage] = useState(10000);

  // Add state for health tier (default: select1)
  const [healthTier, setHealthTier] = useState<'select1' | 'select2' | 'select3'>('select1');

  // Health questionnaire state
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);
  const [q4, setQ4] = useState<string | null>(null);
  const [q5, setQ5] = useState<string | null>(null);

  // Auto-classify health tier based on answers
  React.useEffect(() => {
    if (!selectedState || !burialType) return;
    if ([q1, q2, q3].includes("yes")) {
      setHealthTier("select3");
    } else if (q4 === "yes" || q5 === "yes") {
      setHealthTier("select2");
    } else if ([q1, q2, q3, q4, q5].every(q => q === "no")) {
      setHealthTier("select1");
    }
  }, [q1, q2, q3, q4, q5, selectedState, burialType]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle state and burial/cremation selection
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setForm({ ...form, state: e.target.value });
  };
  const handleBurialTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBurialType(e.target.value);
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission logic (API call, show confirmation, etc.)
    alert("Thank you! We'll be in touch with your personalized quote.");
  };

  // Get average cost for selected state and type
  const costData = funeralCostsByState.find(f => f.state === selectedState);
  let costRange: string | undefined = undefined;
  if (costData && burialType) {
    const [min, max] = burialType === "burial" ? costData.burial : costData.cremation;
    costRange = `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }

  let costBoxText = "Select your state and burial or cremation to see the average cost.";
  if (costRange) {
    costBoxText = `Average ${burialType.charAt(0).toUpperCase() + burialType.slice(1)} Cost in ${selectedState}: ${costRange}`;
  }

  // Get quote for Michigan only (demo)
  const quote = selectedState
    ? getNationalQuote(quoteGender, quoteAge, quoteCoverage, healthTier)
    : null;

  // Get cash value table for selected tier
  const cashValueTable = getCashValueTable(healthTier);

  return (
    <section className="min-h-screen bg-white py-12 flex flex-col items-center">
      {/* Hero */}
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Final Expense Plans</h1>
        <p className="text-xl text-gray-700 mb-6">
          Affordable, easy-to-get coverage to protect your loved ones from funeral costs and final expenses.
        </p>
      </div>

      {/* State and Burial/Cremation Selection Row */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mb-6 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto md:justify-start">
          <select
            className="p-3 rounded border w-full md:w-64"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select Your State</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select
            className="p-3 rounded border w-full md:w-64"
            value={burialType}
            onChange={handleBurialTypeChange}
          >
            <option value="">Burial or Cremation?</option>
            <option value="burial">Burial</option>
            <option value="cremation">Cremation</option>
          </select>
        </div>
        <div className="bg-blue-100 text-blue-900 rounded-xl px-6 py-4 font-semibold shadow text-center w-full md:w-auto md:min-w-[340px]">
          <span>
            {costBoxText}
            {costRange && <sup className="ml-1 text-xs align-super">*</sup>}
          </span>
        </div>
      </div>
      {/* Data source footnote */}
      <div className="w-full max-w-5xl flex justify-end mb-2">
        <span className="text-xs text-gray-500 italic">
          * Source: National Funeral Directors Association, 2024. Ranges are approximate and may vary by provider.
        </span>
      </div>

      {/* Health Questionnaire */}
      {selectedState && burialType && (
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col gap-6 border border-blue-100">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Quick Health Questionnaire</h2>
          <p className="text-gray-700 mb-2">Answer these questions to help us find the best plan for you. Your answers are private and only used to match you to the right coverage.</p>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-semibold">1. In the past 2 years, have you been diagnosed with, treated for, or advised to have treatment for any of the following: cancer (other than basal cell skin cancer), heart attack, stroke, congestive heart failure, COPD/emphysema, kidney failure, HIV/AIDS?</span>
              <div className="mt-1 flex gap-4">
                <label><input type="radio" name="q1" value="yes" checked={q1 === "yes"} onChange={() => setQ1("yes")}/> Yes</label>
                <label><input type="radio" name="q1" value="no" checked={q1 === "no"} onChange={() => setQ1("no")}/> No</label>
              </div>
            </div>
            <div>
              <span className="font-semibold">2. In the past 2 years, have you been hospitalized overnight for any reason?</span>
              <div className="mt-1 flex gap-4">
                <label><input type="radio" name="q2" value="yes" checked={q2 === "yes"} onChange={() => setQ2("yes")}/> Yes</label>
                <label><input type="radio" name="q2" value="no" checked={q2 === "no"} onChange={() => setQ2("no")}/> No</label>
              </div>
            </div>
            <div>
              <span className="font-semibold">3. Do you currently use oxygen, a wheelchair, or reside in a nursing home?</span>
              <div className="mt-1 flex gap-4">
                <label><input type="radio" name="q3" value="yes" checked={q3 === "yes"} onChange={() => setQ3("yes")}/> Yes</label>
                <label><input type="radio" name="q3" value="no" checked={q3 === "no"} onChange={() => setQ3("no")}/> No</label>
              </div>
            </div>
            <div>
              <span className="font-semibold">4. Do you have any of the following conditions, but they are well controlled (e.g., with medication): high blood pressure, high cholesterol, type 2 diabetes (non-insulin)?</span>
              <div className="mt-1 flex gap-4">
                <label><input type="radio" name="q4" value="yes" checked={q4 === "yes"} onChange={() => setQ4("yes")}/> Yes</label>
                <label><input type="radio" name="q4" value="no" checked={q4 === "no"} onChange={() => setQ4("no")}/> No</label>
              </div>
            </div>
            <div>
              <span className="font-semibold">5. Have you used tobacco in the past 12 months?</span>
              <div className="mt-1 flex gap-4">
                <label><input type="radio" name="q5" value="yes" checked={q5 === "yes"} onChange={() => setQ5("yes")}/> Yes</label>
                <label><input type="radio" name="q5" value="no" checked={q5 === "no"} onChange={() => setQ5("no")}/> No</label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sleek Quote Slider Section */}
      <>
        <div className={`w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 mb-6 flex flex-col md:flex-row gap-8 items-center justify-between border border-blue-100 relative ${(!selectedState || !burialType) ? 'opacity-60 pointer-events-none' : ''}`}>
          {(!selectedState || !burialType) && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10 rounded-2xl">
              <span className="text-lg font-semibold text-blue-700">Input info above to begin quoting.</span>
            </div>
          )}
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            <div className="flex gap-6 items-center">
              <label className="font-semibold text-blue-700">Gender:</label>
              <label className="inline-flex items-center gap-1">
                <input type="radio" name="gender" value="male" checked={quoteGender === 'male'} onChange={() => setQuoteGender('male')} className="accent-blue-700" disabled={!selectedState || !burialType} />
                Male
              </label>
              <label className="inline-flex items-center gap-1">
                <input type="radio" name="gender" value="female" checked={quoteGender === 'female'} onChange={() => setQuoteGender('female')} className="accent-pink-600" disabled={!selectedState || !burialType} />
                Female
              </label>
            </div>
            <div className="flex gap-6 items-center">
              <label className="font-semibold text-blue-700" htmlFor="age-slider">Age:</label>
              <input
                id="age-slider"
                type="range"
                min={60}
                max={80}
                value={quoteAge}
                onChange={e => setQuoteAge(Number(e.target.value))}
                className="w-48 accent-blue-700"
                disabled={!selectedState || !burialType}
              />
              <span className="font-bold text-lg text-blue-900 w-10 text-center">{quoteAge}</span>
            </div>
            <div className="flex gap-6 items-center">
              <label className="font-semibold text-blue-700" htmlFor="coverage-slider">Coverage:</label>
              <input
                id="coverage-slider"
                type="range"
                min={5000}
                max={20000}
                step={1000}
                value={quoteCoverage}
                onChange={e => setQuoteCoverage(Number(e.target.value))}
                className="w-48 accent-blue-700"
                disabled={!selectedState || !burialType}
              />
              <span className="font-bold text-lg text-blue-900 w-20 text-center">${quoteCoverage.toLocaleString()}</span>
            </div>
            <div className="flex gap-6 items-center">
              <label className="font-semibold text-blue-700">Health Tier:</label>
              <label className="inline-flex items-center gap-1">
                <input type="radio" name="tier" value="select1" checked={healthTier === 'select1'} onChange={() => setHealthTier('select1')} className="accent-blue-700" disabled={!selectedState || !burialType} />
                Select 1
              </label>
              <label className="inline-flex items-center gap-1">
                <input type="radio" name="tier" value="select2" checked={healthTier === 'select2'} onChange={() => setHealthTier('select2')} className="accent-green-600" disabled={!selectedState || !burialType} />
                Select 2
              </label>
              <label className="inline-flex items-center gap-1">
                <input type="radio" name="tier" value="select3" checked={healthTier === 'select3'} onChange={() => setHealthTier('select3')} className="accent-yellow-600" disabled={!selectedState || !burialType} />
                Select 3
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="bg-blue-700 text-white rounded-2xl px-8 py-6 shadow-xl text-center text-2xl font-extrabold tracking-tight min-h-[64px] flex items-center justify-center">
              {selectedState && burialType
                ? (quote ? (
                    <>
                      ${quote} <span className="text-base font-medium">/ month</span>
                    </>
                  ) : null)
                : null}
            </div>
            <span className="text-xs text-gray-500 mt-2">* Actual rates may vary based on final medical underwriting.</span>
          </div>
        </div>
      </>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-5xl">
        {/* Expert Guidance Call-to-Action */}
        <div className="flex-1 bg-gray-50 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-2xl font-extrabold text-blue-700 mb-2">Want expert guidance?</h2>
          <p className="text-lg text-gray-700 mb-4">Click below to talk to an agent and get personalized help right away.</p>
          <a href="tel:+15037645097" className="w-full max-w-xs bg-blue-700 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.06 16.06 0 006.36 6.36l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" /></svg>
            Call Now
          </a>
        </div>

        {/* Selling Points Sidebar */}
        <div className="w-full lg:w-80 bg-blue-50 rounded-3xl shadow-lg p-8 h-fit sticky top-24 self-start flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold text-blue-700 mb-2 tracking-tight">Why Choose Final Expense?</h3>
          <ul className="flex flex-col gap-4 text-blue-900">
            {sellingPoints.map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="leading-snug text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FinalExpensePage; 