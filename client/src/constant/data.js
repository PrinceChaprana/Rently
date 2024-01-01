import {MenuItem} from '@mui/material'

export const countryListWithCode = [
    {"name": "Albania", "code": "AL"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "Andorra", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Australia", "code": "AU"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas (the)", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia (Plurinational State of)", "code": "BO"},
    {"name": "Bonaire, Sint Eustatius and Saba", "code": "BQ"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory (the)", "code": "IO"},
    {"name": "Brunei Darussalam", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cabo Verde", "code": "CV"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Canada", "code": "CA"},
    {"name": "Cayman Islands (the)", "code": "KY"},
    {"name": "Central African Republic (the)", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos (Keeling) Islands (the)", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros (the)", "code": "KM"},
    {"name": "Congo (the Democratic Republic of the)", "code": "CD"},
    {"name": "Congo (the)", "code": "CG"},
    {"name": "Cook Islands (the)", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Curaçao", "code": "CW"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czechia", "code": "CZ"},
    {"name": "Côte d'Ivoire", "code": "CI"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic (the)", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Eswatini", "code": "SZ"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands (the) [Malvinas]", "code": "FK"},
    {"name": "Faroe Islands (the)", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories (the)", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia (the)", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Heard Island and McDonald Islands", "code": "HM"},
    {"name": "Holy See (the)", "code": "VA"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran (Islamic Republic of)", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Korea (the Democratic People's Republic of)", "code": "KP"},
    {"name": "Korea (the Republic of)", "code": "KR"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Lao People's Democratic Republic (the)", "code": "LA"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands (the)", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia (Federated States of)", "code": "FM"},
    {"name": "Moldova (the Republic of)", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montenegro", "code": "ME"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands (the)", "code": "NL"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger (the)", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "Northern Mariana Islands (the)", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Palestine, State of", "code": "PS"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines (the)", "code": "PH"},
    {"name": "Pitcairn", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Republic of North Macedonia", "code": "MK"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russian Federation (the)", "code": "RU"},
    {"name": "Rwanda", "code": "RW"},
    {"name": "Réunion", "code": "RE"},
    {"name": "Saint Barthélemy", "code": "BL"},
    {"name": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Martin (French part)", "code": "MF"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia", "code": "RS"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Sint Maarten (Dutch part)", "code": "SX"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "South Sudan", "code": "SS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan (the)", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syrian Arab Republic", "code": "SY"},
    {"name": "Taiwan (Province of China)", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania, United Republic of", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Timor-Leste", "code": "TL"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands (the)", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates (the)", "code": "AE"},
    {"name": "United Kingdom of Great Britain and Northern Ireland (the)", "code": "GB"},
    {"name": "United States Minor Outlying Islands (the)", "code": "UM"},
    {"name": "United States of America (the)", "code": "US"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela (Bolivarian Republic of)", "code": "VE"},
    {"name": "Viet Nam", "code": "VN"},
    {"name": "Virgin Islands (British)", "code": "VG"},
    {"name": "Virgin Islands (U.S.)", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe", "code": "ZW"}
];

export const countryList = [
    <MenuItem value="Afghanistan">Afghanistan</MenuItem>,
    <MenuItem value="Åland Islands">Åland Islands</MenuItem>,
    <MenuItem value="Albania">Albania</MenuItem>,
    <MenuItem value="Algeria">Algeria</MenuItem>,
    <MenuItem value="American Samoa">American Samoa</MenuItem>,
    <MenuItem value="Andorra">Andorra</MenuItem>,
    <MenuItem value="Angola">Angola</MenuItem>,
    <MenuItem value="Anguilla">Anguilla</MenuItem>,
    <MenuItem value="Antarctica">Antarctica</MenuItem>,
    <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>,
    <MenuItem value="Argentina">Argentina</MenuItem>,
    <MenuItem value="Armenia">Armenia</MenuItem>,
    <MenuItem value="Aruba">Aruba</MenuItem>,
    <MenuItem value="Australia">Australia</MenuItem>,
    <MenuItem value="Austria">Austria</MenuItem>,
    <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>,
    <MenuItem value="Bahamas">Bahamas</MenuItem>,
    <MenuItem value="Bahrain">Bahrain</MenuItem>,
    <MenuItem value="Bangladesh">Bangladesh</MenuItem>,
    <MenuItem value="Barbados">Barbados</MenuItem>,
    <MenuItem value="Belarus">Belarus</MenuItem>,
    <MenuItem value="Belgium">Belgium</MenuItem>,
    <MenuItem value="Belize">Belize</MenuItem>,
    <MenuItem value="Benin">Benin</MenuItem>,
    <MenuItem value="Bermuda">Bermuda</MenuItem>,
    <MenuItem value="Bhutan">Bhutan</MenuItem>,
    <MenuItem value="Bolivia">Bolivia</MenuItem>,
    <MenuItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</MenuItem>,
    <MenuItem value="Botswana">Botswana</MenuItem>,
    <MenuItem value="Bouvet Island">Bouvet Island</MenuItem>,
    <MenuItem value="Brazil">Brazil</MenuItem>,
    <MenuItem value="British Indian Ocean Territory">British Indian Ocean Territory</MenuItem>,
    <MenuItem value="Brunei Darussalam">Brunei Darussalam</MenuItem>,
    <MenuItem value="Bulgaria">Bulgaria</MenuItem>,
    <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>,
    <MenuItem value="Burundi">Burundi</MenuItem>,
    <MenuItem value="Cambodia">Cambodia</MenuItem>,
    <MenuItem value="Cameroon">Cameroon</MenuItem>,
    <MenuItem value="Canada">Canada</MenuItem>,
    <MenuItem value="Cape Verde">Cape Verde</MenuItem>,
    <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>,
    <MenuItem value="Central African Republic">Central African Republic</MenuItem>,
    <MenuItem value="Chad">Chad</MenuItem>,
    <MenuItem value="Chile">Chile</MenuItem>,
    <MenuItem value="China">China</MenuItem>,
    <MenuItem value="Christmas Island">Christmas Island</MenuItem>,
    <MenuItem value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</MenuItem>,
    <MenuItem value="Colombia">Colombia</MenuItem>,
    <MenuItem value="Comoros">Comoros</MenuItem>,
    <MenuItem value="Congo">Congo</MenuItem>,
    <MenuItem value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</MenuItem>,
    <MenuItem value="Cook Islands">Cook Islands</MenuItem>,
    <MenuItem value="Costa Rica">Costa Rica</MenuItem>,
    <MenuItem value="Cote D'ivoire">Cote D'ivoire</MenuItem>,
    <MenuItem value="Croatia">Croatia</MenuItem>,
    <MenuItem value="Cuba">Cuba</MenuItem>,
    <MenuItem value="Cyprus">Cyprus</MenuItem>,
    <MenuItem value="Czech Republic">Czech Republic</MenuItem>,
    <MenuItem value="Denmark">Denmark</MenuItem>,
    <MenuItem value="Djibouti">Djibouti</MenuItem>,
    <MenuItem value="Dominica">Dominica</MenuItem>,
    <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>,
    <MenuItem value="Ecuador">Ecuador</MenuItem>,
    <MenuItem value="Egypt">Egypt</MenuItem>,
    <MenuItem value="El Salvador">El Salvador</MenuItem>,
    <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>,
    <MenuItem value="Eritrea">Eritrea</MenuItem>,
    <MenuItem value="Estonia">Estonia</MenuItem>,
    <MenuItem value="Ethiopia">Ethiopia</MenuItem>,
    <MenuItem value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</MenuItem>,
    <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>,
    <MenuItem value="Fiji">Fiji</MenuItem>,
    <MenuItem value="Finland">Finland</MenuItem>,
    <MenuItem value="France">France</MenuItem>,
    <MenuItem value="French Guiana">French Guiana</MenuItem>,
    <MenuItem value="French Polynesia">French Polynesia</MenuItem>,
    <MenuItem value="French Southern Territories">French Southern Territories</MenuItem>,
    <MenuItem value="Gabon">Gabon</MenuItem>,
    <MenuItem value="Gambia">Gambia</MenuItem>,
    <MenuItem value="Georgia">Georgia</MenuItem>,
    <MenuItem value="Germany">Germany</MenuItem>,
    <MenuItem value="Ghana">Ghana</MenuItem>,
    <MenuItem value="Gibraltar">Gibraltar</MenuItem>,
    <MenuItem value="Greece">Greece</MenuItem>,
    <MenuItem value="Greenland">Greenland</MenuItem>,
    <MenuItem value="Grenada">Grenada</MenuItem>,
    <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>,
    <MenuItem value="Guam">Guam</MenuItem>,
    <MenuItem value="Guatemala">Guatemala</MenuItem>,
    <MenuItem value="Guernsey">Guernsey</MenuItem>,
    <MenuItem value="Guinea">Guinea</MenuItem>,
    <MenuItem value="Guinea-bissau">Guinea-bissau</MenuItem>,
    <MenuItem value="Guyana">Guyana</MenuItem>,
    <MenuItem value="Haiti">Haiti</MenuItem>,
    <MenuItem value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</MenuItem>,
    <MenuItem value="Holy See (Vatican City State)">Holy See (Vatican City State)</MenuItem>,
    <MenuItem value="Honduras">Honduras</MenuItem>,
    <MenuItem value="Hong Kong">Hong Kong</MenuItem>,
    <MenuItem value="Hungary">Hungary</MenuItem>,
    <MenuItem value="Iceland">Iceland</MenuItem>,
    <MenuItem value="India">India</MenuItem>,
    <MenuItem value="Indonesia">Indonesia</MenuItem>,
    <MenuItem value="Iran, Islamic Republic of">Iran, Islamic Republic of</MenuItem>,
    <MenuItem value="Iraq">Iraq</MenuItem>,
    <MenuItem value="Ireland">Ireland</MenuItem>,
    <MenuItem value="Isle of Man">Isle of Man</MenuItem>,
    <MenuItem value="Israel">Israel</MenuItem>,
    <MenuItem value="Italy">Italy</MenuItem>,
    <MenuItem value="Jamaica">Jamaica</MenuItem>,
    <MenuItem value="Japan">Japan</MenuItem>,
    <MenuItem value="Jersey">Jersey</MenuItem>,
    <MenuItem value="Jordan">Jordan</MenuItem>,
    <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>,
    <MenuItem value="Kenya">Kenya</MenuItem>,
    <MenuItem value="Kiribati">Kiribati</MenuItem>,
    <MenuItem value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</MenuItem>,
    <MenuItem value="Korea, Republic of">Korea, Republic of</MenuItem>,
    <MenuItem value="Kuwait">Kuwait</MenuItem>,
    <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>,
    <MenuItem value="Lao People's Democratic Republic">Lao People's Democratic Republic</MenuItem>,
    <MenuItem value="Latvia">Latvia</MenuItem>,
    <MenuItem value="Lebanon">Lebanon</MenuItem>,
    <MenuItem value="Lesotho">Lesotho</MenuItem>,
    <MenuItem value="Liberia">Liberia</MenuItem>,
    <MenuItem value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</MenuItem>,
    <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>,
    <MenuItem value="Lithuania">Lithuania</MenuItem>,
    <MenuItem value="Luxembourg">Luxembourg</MenuItem>,
    <MenuItem value="Macao">Macao</MenuItem>,
    <MenuItem value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</MenuItem>,
    <MenuItem value="Madagascar">Madagascar</MenuItem>,
    <MenuItem value="Malawi">Malawi</MenuItem>,
    <MenuItem value="Malaysia">Malaysia</MenuItem>,
    <MenuItem value="Maldives">Maldives</MenuItem>,
    <MenuItem value="Mali">Mali</MenuItem>,
    <MenuItem value="Malta">Malta</MenuItem>,
    <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>,
    <MenuItem value="Martinique">Martinique</MenuItem>,
    <MenuItem value="Mauritania">Mauritania</MenuItem>,
    <MenuItem value="Mauritius">Mauritius</MenuItem>,
    <MenuItem value="Mayotte">Mayotte</MenuItem>,
    <MenuItem value="Mexico">Mexico</MenuItem>,
    <MenuItem value="Micronesia, Federated States of">Micronesia, Federated States of</MenuItem>,
    <MenuItem value="Moldova, Republic of">Moldova, Republic of</MenuItem>,
    <MenuItem value="Monaco">Monaco</MenuItem>,
    <MenuItem value="Mongolia">Mongolia</MenuItem>,
    <MenuItem value="Montenegro">Montenegro</MenuItem>,
    <MenuItem value="Montserrat">Montserrat</MenuItem>,
    <MenuItem value="Morocco">Morocco</MenuItem>,
    <MenuItem value="Mozambique">Mozambique</MenuItem>,
    <MenuItem value="Myanmar">Myanmar</MenuItem>,
    <MenuItem value="Namibia">Namibia</MenuItem>,
    <MenuItem value="Nauru">Nauru</MenuItem>,
    <MenuItem value="Nepal">Nepal</MenuItem>,
    <MenuItem value="Netherlands">Netherlands</MenuItem>,
    <MenuItem value="Netherlands Antilles">Netherlands Antilles</MenuItem>,
    <MenuItem value="New Caledonia">New Caledonia</MenuItem>,
    <MenuItem value="New Zealand">New Zealand</MenuItem>,
    <MenuItem value="Nicaragua">Nicaragua</MenuItem>,
    <MenuItem value="Niger">Niger</MenuItem>,
    <MenuItem value="Nigeria">Nigeria</MenuItem>,
    <MenuItem value="Niue">Niue</MenuItem>,
    <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>,
    <MenuItem value="Northern Mariana Islands">Northern Mariana Islands</MenuItem>,
    <MenuItem value="Norway">Norway</MenuItem>,
    <MenuItem value="Oman">Oman</MenuItem>,
    <MenuItem value="Pakistan">Pakistan</MenuItem>,
    <MenuItem value="Palau">Palau</MenuItem>,
    <MenuItem value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</MenuItem>,
    <MenuItem value="Panama">Panama</MenuItem>,
    <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>,
    <MenuItem value="Paraguay">Paraguay</MenuItem>,
    <MenuItem value="Peru">Peru</MenuItem>,
    <MenuItem value="Philippines">Philippines</MenuItem>,
    <MenuItem value="Pitcairn">Pitcairn</MenuItem>,
    <MenuItem value="Poland">Poland</MenuItem>,
    <MenuItem value="Portugal">Portugal</MenuItem>,
    <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>,
    <MenuItem value="Qatar">Qatar</MenuItem>,
    <MenuItem value="Reunion">Reunion</MenuItem>,
    <MenuItem value="Romania">Romania</MenuItem>,
    <MenuItem value="Russian Federation">Russian Federation</MenuItem>,
    <MenuItem value="Rwanda">Rwanda</MenuItem>,
    <MenuItem value="Saint Helena">Saint Helena</MenuItem>,
    <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>,
    <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>,
    <MenuItem value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</MenuItem>,
    <MenuItem value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</MenuItem>,
    <MenuItem value="Samoa">Samoa</MenuItem>,
    <MenuItem value="San Marino">San Marino</MenuItem>,
    <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>,
    <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>,
    <MenuItem value="Senegal">Senegal</MenuItem>,
    <MenuItem value="Serbia">Serbia</MenuItem>,
    <MenuItem value="Seychelles">Seychelles</MenuItem>,
    <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>,
    <MenuItem value="Singapore">Singapore</MenuItem>,
    <MenuItem value="Slovakia">Slovakia</MenuItem>,
    <MenuItem value="Slovenia">Slovenia</MenuItem>,
    <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>,
    <MenuItem value="Somalia">Somalia</MenuItem>,
    <MenuItem value="South Africa">South Africa</MenuItem>,
    <MenuItem value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</MenuItem>,
    <MenuItem value="Spain">Spain</MenuItem>,
    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>,
    <MenuItem value="Sudan">Sudan</MenuItem>,
    <MenuItem value="Suriname">Suriname</MenuItem>,
    <MenuItem value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</MenuItem>,
    <MenuItem value="Swaziland">Swaziland</MenuItem>,
    <MenuItem value="Sweden">Sweden</MenuItem>,
    <MenuItem value="Switzerland">Switzerland</MenuItem>,
    <MenuItem value="Syrian Arab Republic">Syrian Arab Republic</MenuItem>,
    <MenuItem value="Taiwan">Taiwan</MenuItem>,
    <MenuItem value="Tajikistan">Tajikistan</MenuItem>,
    <MenuItem value="Tanzania, United Republic of">Tanzania, United Republic of</MenuItem>,
    <MenuItem value="Thailand">Thailand</MenuItem>,
    <MenuItem value="Timor-leste">Timor-leste</MenuItem>,
    <MenuItem value="Togo">Togo</MenuItem>,
    <MenuItem value="Tokelau">Tokelau</MenuItem>,
    <MenuItem value="Tonga">Tonga</MenuItem>,
    <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>,
    <MenuItem value="Tunisia">Tunisia</MenuItem>,
    <MenuItem value="Turkey">Turkey</MenuItem>,
    <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>,
    <MenuItem value="Turks and Caicos Islands">Turks and Caicos Islands</MenuItem>,
    <MenuItem value="Tuvalu">Tuvalu</MenuItem>,
    <MenuItem value="Uganda">Uganda</MenuItem>,
    <MenuItem value="Ukraine">Ukraine</MenuItem>,
    <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>,
    <MenuItem value="United Kingdom">United Kingdom</MenuItem>,
    <MenuItem value="United States">United States</MenuItem>,
    <MenuItem value="United States Minor Outlying Islands">United States Minor Outlying Islands</MenuItem>,
    <MenuItem value="Uruguay">Uruguay</MenuItem>,
    <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>,
    <MenuItem value="Vanuatu">Vanuatu</MenuItem>,
    <MenuItem value="Venezuela">Venezuela</MenuItem>,
    <MenuItem value="Viet Nam">Viet Nam</MenuItem>,
    <MenuItem value="Virgin Islands, British">Virgin Islands, British</MenuItem>,
    <MenuItem value="Virgin Islands, U.S.">Virgin Islands, U.S.</MenuItem>,
    <MenuItem value="Wallis and Futuna">Wallis and Futuna</MenuItem>,
    <MenuItem value="Western Sahara">Western Sahara</MenuItem>,
    <MenuItem value="Yemen">Yemen</MenuItem>,
    <MenuItem value="Zambia">Zambia</MenuItem>,
    <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
];