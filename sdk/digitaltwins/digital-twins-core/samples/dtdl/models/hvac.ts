exports.havc = {
  "@id": "dtmi:samples:HVAC;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  displayName: "HVAC",
  contents: [
    {
      "@type": "Property",
      name: "Efficiency",
      schema: "double"
    },
    {
      "@type": "Property",
      name: "TargetTemperature",
      schema: "double"
    },
    {
      "@type": "Property",
      name: "TargetHumidity",
      schema: "double"
    },
    {
      "@type": "Relationship",
      name: "controlsTemperature",
      target: "dtmi:samples:Floor;1"
    }
  ]
};
