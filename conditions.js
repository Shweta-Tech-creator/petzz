const conditions = [
    {
      "keywords": [
        "fever",
        "temperature",
        "hot"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 1]"
    },
    {
      "keywords": [
        "vomit",
        "throw up",
        "nausea"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 1]"
    },
    {
      "keywords": [
        "diarrhea",
        "loose stool",
        "watery poop"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 1]"
    },
    {
      "keywords": [
        "cut",
        "wound",
        "injury"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 1]"
    },
    {
      "keywords": [
        "tick",
        "fleas",
        "lice"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 1]"
    },
    {
      "keywords": [
        "cough",
        "dry cough",
        "hacking"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 1]"
    },
    {
      "keywords": [
        "eye",
        "red eye",
        "discharge"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 1]"
    },
    {
      "keywords": [
        "ear",
        "scratching ear",
        "head shake"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 1]"
    },
    {
      "keywords": [
        "dehydration",
        "dry nose",
        "no drinking"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 1]"
    },
    {
      "keywords": [
        "itching",
        "rash",
        "allergy"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 1]"
    },
    {
      "keywords": [
        "fever1",
        "temperature1",
        "hot1"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 2]"
    },
    {
      "keywords": [
        "vomit1",
        "throw up1",
        "nausea1"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 2]"
    },
    {
      "keywords": [
        "diarrhea1",
        "loose stool1",
        "watery poop1"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 2]"
    },
    {
      "keywords": [
        "cut1",
        "wound1",
        "injury1"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 2]"
    },
    {
      "keywords": [
        "tick1",
        "fleas1",
        "lice1"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 2]"
    },
    {
      "keywords": [
        "cough1",
        "dry cough1",
        "hacking1"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 2]"
    },
    {
      "keywords": [
        "eye1",
        "red eye1",
        "discharge1"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 2]"
    },
    {
      "keywords": [
        "ear1",
        "scratching ear1",
        "head shake1"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 2]"
    },
    {
      "keywords": [
        "dehydration1",
        "dry nose1",
        "no drinking1"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 2]"
    },
    {
      "keywords": [
        "itching1",
        "rash1",
        "allergy1"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 2]"
    },
    {
      "keywords": [
        "fever2",
        "temperature2",
        "hot2"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 3]"
    },
    {
      "keywords": [
        "vomit2",
        "throw up2",
        "nausea2"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 3]"
    },
    {
      "keywords": [
        "diarrhea2",
        "loose stool2",
        "watery poop2"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 3]"
    },
    {
      "keywords": [
        "cut2",
        "wound2",
        "injury2"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 3]"
    },
    {
      "keywords": [
        "tick2",
        "fleas2",
        "lice2"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 3]"
    },
    {
      "keywords": [
        "cough2",
        "dry cough2",
        "hacking2"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 3]"
    },
    {
      "keywords": [
        "eye2",
        "red eye2",
        "discharge2"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 3]"
    },
    {
      "keywords": [
        "ear2",
        "scratching ear2",
        "head shake2"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 3]"
    },
    {
      "keywords": [
        "dehydration2",
        "dry nose2",
        "no drinking2"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 3]"
    },
    {
      "keywords": [
        "itching2",
        "rash2",
        "allergy2"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 3]"
    },
    {
      "keywords": [
        "fever3",
        "temperature3",
        "hot3"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 4]"
    },
    {
      "keywords": [
        "vomit3",
        "throw up3",
        "nausea3"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 4]"
    },
    {
      "keywords": [
        "diarrhea3",
        "loose stool3",
        "watery poop3"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 4]"
    },
    {
      "keywords": [
        "cut3",
        "wound3",
        "injury3"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 4]"
    },
    {
      "keywords": [
        "tick3",
        "fleas3",
        "lice3"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 4]"
    },
    {
      "keywords": [
        "cough3",
        "dry cough3",
        "hacking3"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 4]"
    },
    {
      "keywords": [
        "eye3",
        "red eye3",
        "discharge3"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 4]"
    },
    {
      "keywords": [
        "ear3",
        "scratching ear3",
        "head shake3"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 4]"
    },
    {
      "keywords": [
        "dehydration3",
        "dry nose3",
        "no drinking3"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 4]"
    },
    {
      "keywords": [
        "itching3",
        "rash3",
        "allergy3"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 4]"
    },
    {
      "keywords": [
        "fever4",
        "temperature4",
        "hot4"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 5]"
    },
    {
      "keywords": [
        "vomit4",
        "throw up4",
        "nausea4"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 5]"
    },
    {
      "keywords": [
        "diarrhea4",
        "loose stool4",
        "watery poop4"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 5]"
    },
    {
      "keywords": [
        "cut4",
        "wound4",
        "injury4"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 5]"
    },
    {
      "keywords": [
        "tick4",
        "fleas4",
        "lice4"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 5]"
    },
    {
      "keywords": [
        "cough4",
        "dry cough4",
        "hacking4"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 5]"
    },
    {
      "keywords": [
        "eye4",
        "red eye4",
        "discharge4"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 5]"
    },
    {
      "keywords": [
        "ear4",
        "scratching ear4",
        "head shake4"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 5]"
    },
    {
      "keywords": [
        "dehydration4",
        "dry nose4",
        "no drinking4"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 5]"
    },
    {
      "keywords": [
        "itching4",
        "rash4",
        "allergy4"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 5]"
    },
    {
      "keywords": [
        "fever5",
        "temperature5",
        "hot5"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 6]"
    },
    {
      "keywords": [
        "vomit5",
        "throw up5",
        "nausea5"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 6]"
    },
    {
      "keywords": [
        "diarrhea5",
        "loose stool5",
        "watery poop5"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 6]"
    },
    {
      "keywords": [
        "cut5",
        "wound5",
        "injury5"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 6]"
    },
    {
      "keywords": [
        "tick5",
        "fleas5",
        "lice5"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 6]"
    },
    {
      "keywords": [
        "cough5",
        "dry cough5",
        "hacking5"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 6]"
    },
    {
      "keywords": [
        "eye5",
        "red eye5",
        "discharge5"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 6]"
    },
    {
      "keywords": [
        "ear5",
        "scratching ear5",
        "head shake5"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 6]"
    },
    {
      "keywords": [
        "dehydration5",
        "dry nose5",
        "no drinking5"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 6]"
    },
    {
      "keywords": [
        "itching5",
        "rash5",
        "allergy5"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 6]"
    },
    {
      "keywords": [
        "fever6",
        "temperature6",
        "hot6"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 7]"
    },
    {
      "keywords": [
        "vomit6",
        "throw up6",
        "nausea6"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 7]"
    },
    {
      "keywords": [
        "diarrhea6",
        "loose stool6",
        "watery poop6"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 7]"
    },
    {
      "keywords": [
        "cut6",
        "wound6",
        "injury6"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 7]"
    },
    {
      "keywords": [
        "tick6",
        "fleas6",
        "lice6"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 7]"
    },
    {
      "keywords": [
        "cough6",
        "dry cough6",
        "hacking6"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 7]"
    },
    {
      "keywords": [
        "eye6",
        "red eye6",
        "discharge6"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 7]"
    },
    {
      "keywords": [
        "ear6",
        "scratching ear6",
        "head shake6"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 7]"
    },
    {
      "keywords": [
        "dehydration6",
        "dry nose6",
        "no drinking6"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 7]"
    },
    {
      "keywords": [
        "itching6",
        "rash6",
        "allergy6"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 7]"
    },
    {
      "keywords": [
        "fever7",
        "temperature7",
        "hot7"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 8]"
    },
    {
      "keywords": [
        "vomit7",
        "throw up7",
        "nausea7"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 8]"
    },
    {
      "keywords": [
        "diarrhea7",
        "loose stool7",
        "watery poop7"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 8]"
    },
    {
      "keywords": [
        "cut7",
        "wound7",
        "injury7"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 8]"
    },
    {
      "keywords": [
        "tick7",
        "fleas7",
        "lice7"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 8]"
    },
    {
      "keywords": [
        "cough7",
        "dry cough7",
        "hacking7"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 8]"
    },
    {
      "keywords": [
        "eye7",
        "red eye7",
        "discharge7"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 8]"
    },
    {
      "keywords": [
        "ear7",
        "scratching ear7",
        "head shake7"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 8]"
    },
    {
      "keywords": [
        "dehydration7",
        "dry nose7",
        "no drinking7"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 8]"
    },
    {
      "keywords": [
        "itching7",
        "rash7",
        "allergy7"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 8]"
    },
    {
      "keywords": [
        "fever8",
        "temperature8",
        "hot8"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 9]"
    },
    {
      "keywords": [
        "vomit8",
        "throw up8",
        "nausea8"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 9]"
    },
    {
      "keywords": [
        "diarrhea8",
        "loose stool8",
        "watery poop8"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 9]"
    },
    {
      "keywords": [
        "cut8",
        "wound8",
        "injury8"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 9]"
    },
    {
      "keywords": [
        "tick8",
        "fleas8",
        "lice8"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 9]"
    },
    {
      "keywords": [
        "cough8",
        "dry cough8",
        "hacking8"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 9]"
    },
    {
      "keywords": [
        "eye8",
        "red eye8",
        "discharge8"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 9]"
    },
    {
      "keywords": [
        "ear8",
        "scratching ear8",
        "head shake8"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 9]"
    },
    {
      "keywords": [
        "dehydration8",
        "dry nose8",
        "no drinking8"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 9]"
    },
    {
      "keywords": [
        "itching8",
        "rash8",
        "allergy8"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 9]"
    },
    {
      "keywords": [
        "fever9",
        "temperature9",
        "hot9"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 10]"
    },
    {
      "keywords": [
        "vomit9",
        "throw up9",
        "nausea9"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 10]"
    },
    {
      "keywords": [
        "diarrhea9",
        "loose stool9",
        "watery poop9"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 10]"
    },
    {
      "keywords": [
        "cut9",
        "wound9",
        "injury9"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 10]"
    },
    {
      "keywords": [
        "tick9",
        "fleas9",
        "lice9"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 10]"
    },
    {
      "keywords": [
        "cough9",
        "dry cough9",
        "hacking9"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 10]"
    },
    {
      "keywords": [
        "eye9",
        "red eye9",
        "discharge9"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 10]"
    },
    {
      "keywords": [
        "ear9",
        "scratching ear9",
        "head shake9"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 10]"
    },
    {
      "keywords": [
        "dehydration9",
        "dry nose9",
        "no drinking9"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 10]"
    },
    {
      "keywords": [
        "itching9",
        "rash9",
        "allergy9"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 10]"
    },
    {
      "keywords": [
        "fever10",
        "temperature10",
        "hot10"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 11]"
    },
    {
      "keywords": [
        "vomit10",
        "throw up10",
        "nausea10"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 11]"
    },
    {
      "keywords": [
        "diarrhea10",
        "loose stool10",
        "watery poop10"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 11]"
    },
    {
      "keywords": [
        "cut10",
        "wound10",
        "injury10"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 11]"
    },
    {
      "keywords": [
        "tick10",
        "fleas10",
        "lice10"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 11]"
    },
    {
      "keywords": [
        "cough10",
        "dry cough10",
        "hacking10"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 11]"
    },
    {
      "keywords": [
        "eye10",
        "red eye10",
        "discharge10"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 11]"
    },
    {
      "keywords": [
        "ear10",
        "scratching ear10",
        "head shake10"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 11]"
    },
    {
      "keywords": [
        "dehydration10",
        "dry nose10",
        "no drinking10"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 11]"
    },
    {
      "keywords": [
        "itching10",
        "rash10",
        "allergy10"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 11]"
    },
    {
      "keywords": [
        "fever11",
        "temperature11",
        "hot11"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 12]"
    },
    {
      "keywords": [
        "vomit11",
        "throw up11",
        "nausea11"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 12]"
    },
    {
      "keywords": [
        "diarrhea11",
        "loose stool11",
        "watery poop11"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 12]"
    },
    {
      "keywords": [
        "cut11",
        "wound11",
        "injury11"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 12]"
    },
    {
      "keywords": [
        "tick11",
        "fleas11",
        "lice11"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 12]"
    },
    {
      "keywords": [
        "cough11",
        "dry cough11",
        "hacking11"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 12]"
    },
    {
      "keywords": [
        "eye11",
        "red eye11",
        "discharge11"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 12]"
    },
    {
      "keywords": [
        "ear11",
        "scratching ear11",
        "head shake11"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 12]"
    },
    {
      "keywords": [
        "dehydration11",
        "dry nose11",
        "no drinking11"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 12]"
    },
    {
      "keywords": [
        "itching11",
        "rash11",
        "allergy11"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 12]"
    },
    {
      "keywords": [
        "fever12",
        "temperature12",
        "hot12"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 13]"
    },
    {
      "keywords": [
        "vomit12",
        "throw up12",
        "nausea12"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 13]"
    },
    {
      "keywords": [
        "diarrhea12",
        "loose stool12",
        "watery poop12"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 13]"
    },
    {
      "keywords": [
        "cut12",
        "wound12",
        "injury12"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 13]"
    },
    {
      "keywords": [
        "tick12",
        "fleas12",
        "lice12"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 13]"
    },
    {
      "keywords": [
        "cough12",
        "dry cough12",
        "hacking12"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 13]"
    },
    {
      "keywords": [
        "eye12",
        "red eye12",
        "discharge12"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 13]"
    },
    {
      "keywords": [
        "ear12",
        "scratching ear12",
        "head shake12"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 13]"
    },
    {
      "keywords": [
        "dehydration12",
        "dry nose12",
        "no drinking12"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 13]"
    },
    {
      "keywords": [
        "itching12",
        "rash12",
        "allergy12"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 13]"
    },
    {
      "keywords": [
        "fever13",
        "temperature13",
        "hot13"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 14]"
    },
    {
      "keywords": [
        "vomit13",
        "throw up13",
        "nausea13"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 14]"
    },
    {
      "keywords": [
        "diarrhea13",
        "loose stool13",
        "watery poop13"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 14]"
    },
    {
      "keywords": [
        "cut13",
        "wound13",
        "injury13"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 14]"
    },
    {
      "keywords": [
        "tick13",
        "fleas13",
        "lice13"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 14]"
    },
    {
      "keywords": [
        "cough13",
        "dry cough13",
        "hacking13"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 14]"
    },
    {
      "keywords": [
        "eye13",
        "red eye13",
        "discharge13"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 14]"
    },
    {
      "keywords": [
        "ear13",
        "scratching ear13",
        "head shake13"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 14]"
    },
    {
      "keywords": [
        "dehydration13",
        "dry nose13",
        "no drinking13"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 14]"
    },
    {
      "keywords": [
        "itching13",
        "rash13",
        "allergy13"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 14]"
    },
    {
      "keywords": [
        "fever14",
        "temperature14",
        "hot14"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 15]"
    },
    {
      "keywords": [
        "vomit14",
        "throw up14",
        "nausea14"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 15]"
    },
    {
      "keywords": [
        "diarrhea14",
        "loose stool14",
        "watery poop14"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 15]"
    },
    {
      "keywords": [
        "cut14",
        "wound14",
        "injury14"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 15]"
    },
    {
      "keywords": [
        "tick14",
        "fleas14",
        "lice14"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 15]"
    },
    {
      "keywords": [
        "cough14",
        "dry cough14",
        "hacking14"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 15]"
    },
    {
      "keywords": [
        "eye14",
        "red eye14",
        "discharge14"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 15]"
    },
    {
      "keywords": [
        "ear14",
        "scratching ear14",
        "head shake14"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 15]"
    },
    {
      "keywords": [
        "dehydration14",
        "dry nose14",
        "no drinking14"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 15]"
    },
    {
      "keywords": [
        "itching14",
        "rash14",
        "allergy14"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 15]"
    },
    {
      "keywords": [
        "fever15",
        "temperature15",
        "hot15"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 16]"
    },
    {
      "keywords": [
        "vomit15",
        "throw up15",
        "nausea15"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 16]"
    },
    {
      "keywords": [
        "diarrhea15",
        "loose stool15",
        "watery poop15"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 16]"
    },
    {
      "keywords": [
        "cut15",
        "wound15",
        "injury15"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 16]"
    },
    {
      "keywords": [
        "tick15",
        "fleas15",
        "lice15"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 16]"
    },
    {
      "keywords": [
        "cough15",
        "dry cough15",
        "hacking15"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 16]"
    },
    {
      "keywords": [
        "eye15",
        "red eye15",
        "discharge15"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 16]"
    },
    {
      "keywords": [
        "ear15",
        "scratching ear15",
        "head shake15"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 16]"
    },
    {
      "keywords": [
        "dehydration15",
        "dry nose15",
        "no drinking15"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 16]"
    },
    {
      "keywords": [
        "itching15",
        "rash15",
        "allergy15"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 16]"
    },
    {
      "keywords": [
        "fever16",
        "temperature16",
        "hot16"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 17]"
    },
    {
      "keywords": [
        "vomit16",
        "throw up16",
        "nausea16"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 17]"
    },
    {
      "keywords": [
        "diarrhea16",
        "loose stool16",
        "watery poop16"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 17]"
    },
    {
      "keywords": [
        "cut16",
        "wound16",
        "injury16"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 17]"
    },
    {
      "keywords": [
        "tick16",
        "fleas16",
        "lice16"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 17]"
    },
    {
      "keywords": [
        "cough16",
        "dry cough16",
        "hacking16"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 17]"
    },
    {
      "keywords": [
        "eye16",
        "red eye16",
        "discharge16"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 17]"
    },
    {
      "keywords": [
        "ear16",
        "scratching ear16",
        "head shake16"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 17]"
    },
    {
      "keywords": [
        "dehydration16",
        "dry nose16",
        "no drinking16"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 17]"
    },
    {
      "keywords": [
        "itching16",
        "rash16",
        "allergy16"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 17]"
    },
    {
      "keywords": [
        "fever17",
        "temperature17",
        "hot17"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 18]"
    },
    {
      "keywords": [
        "vomit17",
        "throw up17",
        "nausea17"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 18]"
    },
    {
      "keywords": [
        "diarrhea17",
        "loose stool17",
        "watery poop17"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 18]"
    },
    {
      "keywords": [
        "cut17",
        "wound17",
        "injury17"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 18]"
    },
    {
      "keywords": [
        "tick17",
        "fleas17",
        "lice17"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 18]"
    },
    {
      "keywords": [
        "cough17",
        "dry cough17",
        "hacking17"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 18]"
    },
    {
      "keywords": [
        "eye17",
        "red eye17",
        "discharge17"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 18]"
    },
    {
      "keywords": [
        "ear17",
        "scratching ear17",
        "head shake17"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 18]"
    },
    {
      "keywords": [
        "dehydration17",
        "dry nose17",
        "no drinking17"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 18]"
    },
    {
      "keywords": [
        "itching17",
        "rash17",
        "allergy17"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 18]"
    },
    {
      "keywords": [
        "fever18",
        "temperature18",
        "hot18"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 19]"
    },
    {
      "keywords": [
        "vomit18",
        "throw up18",
        "nausea18"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 19]"
    },
    {
      "keywords": [
        "diarrhea18",
        "loose stool18",
        "watery poop18"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 19]"
    },
    {
      "keywords": [
        "cut18",
        "wound18",
        "injury18"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 19]"
    },
    {
      "keywords": [
        "tick18",
        "fleas18",
        "lice18"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 19]"
    },
    {
      "keywords": [
        "cough18",
        "dry cough18",
        "hacking18"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 19]"
    },
    {
      "keywords": [
        "eye18",
        "red eye18",
        "discharge18"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 19]"
    },
    {
      "keywords": [
        "ear18",
        "scratching ear18",
        "head shake18"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 19]"
    },
    {
      "keywords": [
        "dehydration18",
        "dry nose18",
        "no drinking18"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 19]"
    },
    {
      "keywords": [
        "itching18",
        "rash18",
        "allergy18"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 19]"
    },
    {
      "keywords": [
        "fever19",
        "temperature19",
        "hot19"
      ],
      "response": "Give pet-safe paracetamol (consult vet), keep hydrated. [Case variation 20]"
    },
    {
      "keywords": [
        "vomit19",
        "throw up19",
        "nausea19"
      ],
      "response": "Withhold food for 12 hours, give water, then bland food. [Case variation 20]"
    },
    {
      "keywords": [
        "diarrhea19",
        "loose stool19",
        "watery poop19"
      ],
      "response": "Feed rice and chicken, give electrolytes. [Case variation 20]"
    },
    {
      "keywords": [
        "cut19",
        "wound19",
        "injury19"
      ],
      "response": "Clean with antiseptic and cover with a sterile bandage. [Case variation 20]"
    },
    {
      "keywords": [
        "tick19",
        "fleas19",
        "lice19"
      ],
      "response": "Use tick repellent shampoo or Spot-On drops. [Case variation 20]"
    },
    {
      "keywords": [
        "cough19",
        "dry cough19",
        "hacking19"
      ],
      "response": "Use a humidifier and monitor breathing. [Case variation 20]"
    },
    {
      "keywords": [
        "eye19",
        "red eye19",
        "discharge19"
      ],
      "response": "Clean with saline, apply vet-recommended drops. [Case variation 20]"
    },
    {
      "keywords": [
        "ear19",
        "scratching ear19",
        "head shake19"
      ],
      "response": "Use vet-prescribed ear drops. [Case variation 20]"
    },
    {
      "keywords": [
        "dehydration19",
        "dry nose19",
        "no drinking19"
      ],
      "response": "Provide electrolytes and fluids. [Case variation 20]"
    },
    {
      "keywords": [
        "itching19",
        "rash19",
        "allergy19"
      ],
      "response": "Use antihistamines (vet approved) and soothing baths. [Case variation 20]"
    }
  ];