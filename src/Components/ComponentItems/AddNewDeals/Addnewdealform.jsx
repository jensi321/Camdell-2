import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BaseUrl, CategoryApi } from '../../BaseURL/BaseUrl';
import CuponAddPopup from './CuponAddPopup';

const Addnewdealform = () => {

    const [show, setShow] = useState(false);

    const [btype, setBtype] = useState('');
    const [btypeError, setBtypeError] = useState('');

    const [categories, setCategories] = useState('');
    const [categoriesError, setCategoriesError] = useState('');
    const [categoriesItem, setCategoriesItems] = useState([]);

    const [subCategories, setSubCategories] = useState('');
    const [subCategoriesError, setSubCategoriesError] = useState('');
    const [subCategoriesItems, setSubCategoriesItems] = useState([])

    const [cCount, setCCount] = useState('');
    const [countError, setCountError ] =useState ('')

    const [couponUsed, setCouponUsed] = useState('');
    const [couponUsedError, setCouponUsedError] = useState('');

    const [registrationNumber, setRegistrationNumber] = useState('');
    const [registrationNumberError, setRegistrationNumberError] = useState('');

    const [couponType, setCouponType] = useState('');
    const [couponTypeError, setCouponTypeError] = useState('');

    const [minAmount, setMinAmount] = useState('');
    const [minAmountError, setMinAmountError] = useState('');

    const [maxAmount, setMaxAmount] = useState('');
    const [maxAmountError, setMaxAmountError] = useState('');

    const [discountAmount, setDiscountAmount] = useState('');
    const [discountAmountError, setDiscountAmountError] = useState('');

    const [websiteLink, setWebsiteLink] = useState('');
    const [websiteLinkError, setWebsiteLinkError] = useState('');

    const [dealStartDate, setDealStartDate] = useState('');
    const [dealStartDateError, setDealStartDateError] = useState('');

    const [dealEndDate, setDealEndDate] = useState('');
    const [dealEndDateError, setDealEndDateError] = useState('');

    const [street1, setStreet1] = useState('');
    const [street1Error, setStreet1Error] = useState('');

    const [street2, setStreet2] = useState('');
    const [street2Error, setStreet2Error] = useState('');

    const [location, setLocation] = useState('');
    const [locationError, setLocationError] = useState('');

    const [state, setState] = useState('');
    const [stateError, setStateError] = useState('');
    const [states, setStates] = useState([]);

    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('')
    const [cities, setCities] = useState([]);

    const [businessRelationship, setBusinessRelationship] = useState('');
    const [businessRelationshipError, setBusinessRelationshipError] = useState('');

    const [howToUse, setHowToUse] = useState('');
    const [howToUseError, setHowToUseError] = useState('');

    const [termsAndCondition, setTermsAndCondition] = useState('');
    const [termsAndConditionError, setTermsAndConditionError] = useState('');

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const [checkboxValue, setCheckboxValue] = useState(false);
    const [checkboxError, setCheckboxError] = useState('');



    const handleBtypeChange = (e) => {
        const inputValue = e.target.value;
        setBtype(inputValue);
        validateBtype(inputValue);
    };
    const validateBtype = (btype) => {
        if (!btype) {
            setBtypeError('Please select business type');
        } else {
            setBtypeError('');
        }
    };

    const handleCategoriesChange = (e) => {
        const inputValue = e.target.value;
        setCategories(inputValue);
        validateCategories(inputValue);
        fetchSubCategory(inputValue)
    };
    const validateCategories = (categories) => {
        if (categories === '') {
            setCategoriesError('Please select company type');
        } else {
            setCategoriesError('');
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${CategoryApi}/getcategory`);
                const data = await response.json();
                setCategoriesItems(data.data);
                console.log(data.data)
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);


    const fetchSubCategory = async (categories) => {
        try {
            const formData = {
                category: categories,
            };

            console.log(categories);
            console.log(formData)
            const response = await fetch(`${BaseUrl}/getsubcategory.php`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data)
            setSubCategoriesItems(data.data)
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };
    const handleSubCategoriesChange = (e) => {
        const inputValue = e.target.value;
        setSubCategories(inputValue);
        validateSubCategories(inputValue);
    };
    const validateSubCategories = (subCategories) => {
        if (subCategories === '') {
            setSubCategoriesError('Please select sub-categories');
        } else {
            setSubCategoriesError('');
        }
    };

    const handleCouponUsedChange = (e) => {
        const inputValue = e.target.value;
        setCouponUsed(inputValue);
        validateCouponUsed(inputValue);
    };
    const validateCouponUsed = (couponUsed) => {
        if (couponUsed === '') {
            setCouponUsedError('Please select coupon used type');
        } else {
            setCouponUsedError('');
        }
    };

    const handleRegistrationNumberChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
        setRegistrationNumber(onlyNumbers);
        validateRegistrationNumber(onlyNumbers);
    }
    const validateRegistrationNumber = (registrationNumber) => {
        const regex = /^[0-9]{3,20}$/; // adjust the regex to match your requirements
        if (!regex.test(registrationNumber)) {
            setRegistrationNumberError('Please enter a valid registration number');
        } else {
            setRegistrationNumberError('');
        }
    }

    const handleCount = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
        setCCount(onlyNumbers);
        validCountNumber(onlyNumbers);
    }
    const validCountNumber = (cCount) => {
        const regex = /^[0-9]{1,4}$/; // adjust the regex to match your requirements
        if (!regex.test(cCount)) {
            setCountError('Please enter a valid number of years');
        } else {
            setCountError('');
        }
    }

    const handleCouponTypeChange = (e) => {
        const inputValue = e.target.value;
        setCouponType(inputValue);
        validateCouponType(inputValue);
    }
    const validateCouponType = (couponType) => {
        if (couponType === '') {
            setCouponTypeError('Please select a coupon type');
        } else {
            setCouponTypeError('');
        }
    }

    const handleMinAmountChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9.]/g, '');
        setMinAmount(onlyNumbers);
        validateMinAmount(onlyNumbers);
    }
    const validateMinAmount = (minAmount) => {
        const regex = /^[0-9]+(\.[0-9]{1,2})?$/; // adjust the regex to match your requirements
        if (!regex.test(minAmount)) {
            setMinAmountError('Please enter a valid minimum amount');
        } else if (parseFloat(minAmount) <= 0) {
            setMinAmountError('Minimum amount must be greater than 0');
        } else {
            setMinAmountError('');
        }
    }

    const handleMaxAmountChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9.]/g, '');
        setMaxAmount(onlyNumbers);
        validateMaxAmount(onlyNumbers);
    }
    const validateMaxAmount = (maxAmount) => {
        const regex = /^[0-9]+(\.[0-9]{1,2})?$/; // adjust the regex to match your requirements
        if (!regex.test(maxAmount)) {
            setMaxAmountError('Please enter a valid maximum amount');
        } else if (parseFloat(maxAmount) <= 0) {
            setMaxAmountError('Maximum amount must be greater than 0');
        } else if (parseFloat(maxAmount) <= parseFloat(minAmount)) {
            setMaxAmountError('Maximum amount must be greater than minimum amount');
        } else {
            setMaxAmountError('');
        }
    }

    const handleDiscountAmountChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9.]/g, '');
        setDiscountAmount(onlyNumbers);
        validateDiscountAmount(onlyNumbers);
    }
    const validateDiscountAmount = (discountAmount) => {
        const regex = /^[0-9]+(\.[0-9]{1,2})?$/; // adjust the regex to match your requirements
        if (!regex.test(discountAmount)) {
            setDiscountAmountError('Please enter a valid discount amount');
        } else if (parseFloat(discountAmount) < 0) {
            setDiscountAmountError('Discount amount cannot be negative');
        } else if (parseFloat(discountAmount) > 100) {
            setDiscountAmountError('Discount amount cannot be greater than 100');
        } else {
            setDiscountAmountError('');
        }
    }

    const handleWebsiteLinkChange = (e) => {
        const inputValue = e.target.value;
        setWebsiteLink(inputValue);
        validateWebsiteLink(inputValue);
    }
    const validateWebsiteLink = (websiteLink) => {
        const regex = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/; // adjust the regex to match your requirements
        if (!regex.test(websiteLink)) {
            setWebsiteLinkError('Please enter a valid website link');
        } else {
            setWebsiteLinkError('');
        }
    }

    const handleDealStartDateChange = (e) => {
        const inputValue = e.target.value;
        setDealStartDate(inputValue);
        validateDealStartDate(inputValue);
    }
    const validateDealStartDate = (dealStartDate) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // adjust the regex to match your requirements (YYYY-MM-DD format)
        if (!regex.test(dealStartDate)) {
            setDealStartDateError('Please enter a valid date in YYYY-MM-DD format');
        } else {
            const dateParts = dealStartDate.split('-');
            const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            if (!date.getTime()) {
                setDealStartDateError('Please enter a valid date');
            } else {
                setDealStartDateError('');
            }
        }
    }

    const handleDealEndDateChange = (e) => {
        const inputValue = e.target.value;
        setDealEndDate(inputValue);
        validateDealEndDate(inputValue);
    }
    const validateDealEndDate = (dealEndDate) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // adjust the regex to match your requirements (YYYY-MM-DD format)
        if (!regex.test(dealEndDate)) {
            setDealEndDateError('Please enter a valid date in YYYY-MM-DD format');
        } else {
            const dateParts = dealEndDate.split('-');
            const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            if (!date.getTime()) {
                setDealEndDateError('Please enter a valid date');
            } else {
                if (dealStartDate && date.getTime() < new Date(dealStartDate).getTime()) {
                    setDealEndDateError('Deal end date cannot be before deal start date');
                } else {
                    setDealEndDateError('');
                }
            }
        }
    }

    const handleStreet1Change = (e) => {
        const inputValue = e.target.value;
        setStreet1(inputValue);
        validateStreet1(inputValue);
    }
    const validateStreet1 = (street1) => {
        if (!street1.trim()) {
            setStreet1Error('Please enter a valid street address');
        } else {
            setStreet1Error('');
        }
    }

    const handleStreet2Change = (e) => {
        const inputValue = e.target.value;
        setStreet2(inputValue);
        validateStreet2(inputValue);
    }
    const validateStreet2 = (street2) => {
        if (!street2.trim()) {
            setStreet2Error('Please enter a valid street address');
        } else {
            setStreet2Error('');
        }
    }

    const handleLocationChange = (e) => {
        const inputValue = e.target.value;
        setLocation(inputValue);
        validateLocation(inputValue);
    }
    const validateLocation = (location) => {
        if (!location.trim()) {
            setLocationError('Please enter a valid location');
        } else {
            setLocationError('');
        }
    }

    const handleStateChange = (e) => {
        const inputValue = e.target.value;
        setState(inputValue);
        validateState(inputValue);
        fetchCities(inputValue);
        console.log(inputValue)
    };
    const validateState = (state) => {
        if (!state) {
            setStateError('Please select a state');
        } else {
            setStateError('');
        }
    };
    const fetchStates = async () => {
        try {
            const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
            const data = await response.json();
            const stateValue = data.data[99].states;
            console.log(data.data[99])
            setStates(stateValue)
            // Extract the states array from the response object
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    }
    useEffect(() => {
        fetchStates();
    }, []);

    const handleCityChange = (e) => {
        const inputValue = e.target.value;
        setCity(inputValue);
        validateCity(inputValue);
    }
    const validateCity = (city) => {
        if (!city.trim()) {
            setCityError('Please select a city');
        } else {
            setCityError('');
        }
    }
    const fetchCities = async (state) => {
        try {
            const formData = {
                country: "India",
                state: state,
            };
            const response = await fetch(`https://countriesnow.space/api/v0.1/countries/state/cities`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data.data)
            setCities(data.data)
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const handleBusinessRelationshipChange = (e) => {
        const inputValue = e.target.value;
        setBusinessRelationship(inputValue);
        validateBusinessRelationship(inputValue);
    };
    const validateBusinessRelationship = (businessRelationship) => {
        if (!businessRelationship) {
            setBusinessRelationshipError('Please select a business relationship');
        } else {
            setBusinessRelationshipError('');
        }
    };

    const handleHowToUseChange = (e) => {
        const inputValue = e.target.value;
        setHowToUse(inputValue);
        validateHowToUse(inputValue);
    };
    const validateHowToUse = (howToUse) => {
        if (!howToUse.trim()) {
            setHowToUseError('Please enter how to use coupons');
        } else {
            setHowToUseError('');
        }
    };

    const handleTermsAndConditionChange = (e) => {
        const inputValue = e.target.value;
        setTermsAndCondition(inputValue);
        validateTermsAndCondition(inputValue);
    };
    const validateTermsAndCondition = (termsAndCondition) => {
        if (!termsAndCondition.trim()) {
            setTermsAndConditionError('Please enter terms and condition');
        } else {
            setTermsAndConditionError('');
        }
    };

    const handleDescriptionChange = (e) => {
        const inputValue = e.target.value;
        setDescription(inputValue);
        validateDescription(inputValue);
    };
    const validateDescription = (description) => {
        if (!description.trim()) {
            setDescriptionError('Please enter description');
        } else {
            setDescriptionError('');
        }
    };

    const handleCheckboxChange = (e) => {
        const checkboxChecked = e.target.checked;
        setCheckboxValue(checkboxChecked);
        validateCheckbox(checkboxChecked);
    };
    const validateCheckbox = (checkboxChecked) => {
        if (!checkboxChecked) {
            setCheckboxError('Please check the checkbox');
        } else {
            setCheckboxError('');
        }
    };

    const [images, setImages] = useState([]);
    const [imageNames, setImageNames] = useState([]);
    const [imageError, setImageError] = useState('');

    const handleImageChange = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files);

        imagesArray.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result;
                console.log("base64 url", base64);

                // Make API call to upload image

                fetch(`${BaseUrl}/uploadimage.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ base64: base64 })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            const imageName = data.data.replace(/^images\//, ''); // Remove the "images/" part
                            setImageNames((prevImageNames) => [...prevImageNames, imageName]); // Add the uploaded image name to the array
                            console.log(`Image uploaded successfully: ${imageName}`);
                            setImageError('');
                        } else {
                            throw new Error('Image upload failed');
                        }

                    })

                    .catch(error => {
                        console.error(`Error uploading image: ${error.message}`);
                        setImageError(error.message);
                    });
            };
            reader.readAsDataURL(file);
        });
    };

    const tokenData = JSON.parse(sessionStorage.getItem('token'));
    const userId = (tokenData.id)
    console.log(userId);

    const handleSubmitValue = () => {
        console.log(imageNames)

        setBtype('')
        setBusinessRelationship('')
        setCategories('')
        setSubCategories('');
        setCCount('')
        setCouponUsed('')
        setRegistrationNumber('')
        setCouponType('')
        setMaxAmount('')
        setMinAmount('')
        setDiscountAmount('')
        setWebsiteLink('')
        setDealEndDate('')
        setDealStartDate('')
        setStreet1('')
        setStreet2('')
        setLocation('')
        setState('')
        setCity('')
        setBusinessRelationship('')
        setHowToUse('')
        setTermsAndCondition('')
        setDescription('')
        setImageNames(''); // Reset image name
        setImages('Upload The Images')
        setCheckboxValue(false)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = {
            user_id: userId,
            category: categories,
            subcategory: subCategories,
            total_coupon:cCount,
            business_type: btype,
            coupon_used: couponUsed,
            registration_number: registrationNumber,
            business_relationship: businessRelationship,
            description: description,
            coupon_type: couponType,
            minimum_amount: minAmount,
            maximum_amount: maxAmount,
            discount_amount: discountAmount,
            terms_condition: termsAndCondition,
            how_to_use_coupon: howToUse,
            website_link: websiteLink,
            images: JSON.stringify(imageNames),
            deal_start_date: dealStartDate,
            deal_end_date: dealEndDate,
        };

        // Validate form data
        const errors = {};
        if (!categories) {
            errors.categories = 'Please select category';
            setCategoriesError('Please select category');
        }
        if (!subCategories) {
            errors.subCategories = 'Please select subcategory';
            setSubCategoriesError('Please select subcategory');
        }
        if (!cCount){
            errors.cCount = 'Please Enter Cupon Count';
            setCountError('Please Enter Cupon Count')
        }
        if (!btype) {
            errors.btype = 'Please select business type';
            setBtypeError('Please select business type');
        }
        if (!couponUsed) {
            errors.couponUsed = 'Please select coupon used';
            setCouponUsedError('Please select coupon used');
        }
        if (!registrationNumber) {
            errors.registrationNumber = 'Please enter registration number';
            setRegistrationNumberError('Please enter registration number');
        }
        if (!businessRelationship) {
            errors.businessRelationship = 'Please select business relationship';
            setBusinessRelationshipError('Please select business relationship');
        }
        if (!description) {
            errors.description = 'Please enter description';
            setDescriptionError('Please enter description');
        }
        if (!couponType) {
            errors.couponType = 'Please select coupon type';
            setCouponTypeError('Please select coupon type');
        }
        if (!minAmount) {
            errors.minAmount = 'Please enter minimum amount';
            setMinAmountError('Please enter minimum amount');
        }
        if (!maxAmount) {
            errors.maxAmount = 'Please enter maximum amount';
            setMaxAmountError('Please enter maximum amount');
        }
        if (!discountAmount) {
            errors.discountAmount = 'Please enter discount amount';
            setDiscountAmountError('Please enter discount amount');
        }
        if (!howToUse) {
            errors.howToUse = 'Please enter how to use coupon';
            setHowToUseError('Please enter how to use coupon');
        }
        if (!websiteLink) {
            errors.websiteLink = 'Please enter website link';
            setWebsiteLinkError('Please enter website link');
        }
        if (!images) {
            errors.image = 'Please upload images';
            setImageError('Please upload images');
        }

        if (!dealStartDate) {
            errors.dealStartDate = 'Please enter deal start date';
            setDealStartDateError('Please enter deal start date');
        }
        if (!dealEndDate) {
            errors.dealEndDate = 'Please enter deal end date';
            setDealEndDateError('Please enter deal end date');
        }

        console.log(formData)
        // Check if there are any errors
        if (Object.keys(errors).length > 0) {
            // Display errors to the user
            console.log('Errors:', errors);
            // You can also display the errors in a UI component, such as an alert or error message
        } else {
            // Make API call to add coupon code
            fetch(`${BaseUrl}/addcoupon_code.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('API response:', data);
                    if (data.success) {
                        alert('Cupon Add Successfully')
                        setShow(true)
                        handleSubmitValue()
                    }
                    // Handle API response, such as displaying a success message or redirecting to a new page
                })
                .catch(error => {
                    console.error('API error:', error);
                    // Handle API error, such as displaying an error message
                });
        }
    };


    return (
        <>
            <div className="add-new-deals-outer">
                <div className="container">
                    <div className="add-new-deals-inner">
                        <div className="heading">
                            <h3>Add new deals</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Business Type</label>
                                        <select id="btype" name="btype" value={btype} onChange={handleBtypeChange}>
                                            <option value="" selected disabled>select Business type</option>
                                            <option value="b-type1">Saab</option>
                                            <option value="b-type2">Fiat</option>
                                            <option value="b-type3">Audi</option>
                                        </select>
                                        {btypeError && <div className="error">{btypeError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Categories</label>
                                        <select id="categories" name="categories" value={categories} onChange={handleCategoriesChange}>
                                            <option value="" selected disabled>Enter the categories</option>
                                            {categoriesItem && categoriesItem.map((i, index) => {
                                                return (<option value={i.id} key={index} >{i.name}</option>
                                                )
                                            })}
                                        </select>
                                        {categoriesError && <div className="error">{categoriesError}</div>}

                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">sub - Categories</label>
                                        <select id="subcategories" name="subcategories" value={subCategories} onChange={handleSubCategoriesChange}>
                                            <option value="" selected disabled>Enter the sub-categories</option>
                                            {
                                                subCategoriesItems && subCategoriesItems.map((i, index) => {
                                                    return (<option value={i.id} key={index} >{i.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {subCategoriesError && (
                                            <div className="error">{subCategoriesError}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Cupon Count</label>
                                        <input type="text" placeholder='Enter Cupon Count'  value={cCount} onChange={handleCount}/>
                                        {countError && ( <div className="error">{countError}</div> )}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Coupon Used</label>
                                        <select id="cuponused" name="cuponused" value={couponUsed} onChange={handleCouponUsedChange}>
                                            <option value="" selected disabled>Select coupon used type</option>
                                            <option value="online">Online</option>
                                            <option value="offline">Offline</option>
                                        </select>
                                        {couponUsedError && (<div className="error">{couponUsedError}</div>)}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Registration number</label>
                                        <input type="text" id='registrationnumber' name='registrationnumber' placeholder='Registration number' value={registrationNumber} onChange={handleRegistrationNumberChange} />
                                        {registrationNumberError && <div className="error">{registrationNumberError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Coupon Type</label>
                                        <select id="categories" name="categories" value={couponType} onChange={handleCouponTypeChange}>
                                            <option value="" selected disabled>select coupons type</option>
                                            <option value="discount">Discount</option>
                                            <option value="cashback">Cashback</option>
                                            <option value="Voucher">voucher</option>
                                        </select>
                                        {couponTypeError && <div className="error">{couponTypeError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Discount</label>
                                        <input type="text" name='discamount' id='discamount' placeholder='Enter discount' value={discountAmount} onChange={handleDiscountAmountChange} />
                                        {discountAmountError && <div className="error">{discountAmountError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Minimum Amount purchase</label>
                                        <input type="text" id='miniamount' name='miniamount' placeholder='Purchase amount of coupons' value={minAmount} onChange={handleMinAmountChange} />
                                        {minAmountError && <div className="error">{minAmountError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Maximum Amount purchase</label>
                                        <input type="text" name='maxamount' id='maxamount' placeholder='Purchase amount of coupons' value={maxAmount} onChange={handleMaxAmountChange} />
                                        {maxAmountError && <div className="error">{maxAmountError}</div>}
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Website link</label>
                                        <input type="text" name='wesite' id='website' placeholder='enter website link' value={websiteLink} onChange={handleWebsiteLinkChange} />
                                        {websiteLinkError && <div className="error">{websiteLinkError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Deals started date</label>
                                        <input type="date" name='startdate' id='startdate' placeholder='Enter the started date' value={dealStartDate} onChange={handleDealStartDateChange} />
                                        {dealStartDateError && <div className="error">{dealStartDateError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Deals ended date</label>
                                        <input type="date" name='enddate' id='enddate' placeholder='Enter the ended date' value={dealEndDate} onChange={handleDealEndDateChange} />
                                        {dealEndDateError && <div className="error">{dealEndDateError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Street 1</label>
                                        <input type="text" name='street1' id='street1' placeholder='Enter street 1' value={street1} onChange={handleStreet1Change} />
                                        {street1Error && <div className="error">{street1Error}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Street 2</label>
                                        <input type="text" name='street2' id='street2' placeholder='Enter street 2' value={street2} onChange={handleStreet2Change} />
                                        {street2Error && <div className="error">{street2Error}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Location</label>
                                        <input type="text" name='location' id='location' placeholder='Enter location' value={location} onChange={handleLocationChange} />
                                        {locationError && <div className="error">{locationError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">State</label>
                                        <select id="state" name="state" value={state} onChange={handleStateChange}>
                                            <option value="" selected disabled>Select state</option>
                                            {states && states.map((state) => (
                                                <option key={state.name} value={state.name}>{state.name}</option>
                                            ))}
                                        </select>
                                        {stateError && <div className="error">{stateError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">City</label>
                                        <select id="city" name="city" value={city} onChange={handleCityChange}>
                                            <option value="" selected disabled>Select city</option>
                                            {Array.isArray(cities) && cities.map((city) => (
                                                <option key={city} value={city}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                        {cityError && <div className="error">{cityError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="inputgroup">
                                        <label htmlFor="">Business Relationship</label>
                                        <select id="brelation" name="brelation" value={businessRelationship} onChange={handleBusinessRelationshipChange}>
                                            <option value="" selected disabled>select relationship</option>
                                            <option value="relation1">Saab</option>
                                            <option value="relation2">Fiat</option>
                                            <option value="relation3">Audi</option>
                                        </select>
                                        {businessRelationshipError && <div className="error">{businessRelationshipError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="inputgroup">
                                        <label htmlFor="">how to use coupon</label>
                                        <textarea name="howusecupon" id="howusecupon" placeholder='Enter how to use  coupons' value={howToUse} onChange={handleHowToUseChange} />
                                        {howToUseError && <div className="error">{howToUseError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="inputgroup">
                                        <label htmlFor="">Terms & condition</label>
                                        <textarea name="condition" id="condition" placeholder='Enter terms & condition' value={termsAndCondition} onChange={handleTermsAndConditionChange} />
                                        {termsAndConditionError && <div className="error">{termsAndConditionError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="inputgroup">
                                        <label htmlFor="">Description</label>
                                        <textarea name="description" id="description" placeholder='Enter description' value={description} onChange={handleDescriptionChange} />
                                        {descriptionError && <div className="error">{descriptionError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="inputgroup">
                                        <label htmlFor="">Upload image</label>
                                        <div className="upload-image">
                                            {imageNames.length > 0 ? (
                                                imageNames.map((imageName, i) => (
                                                    <p key={i}>{imageName}</p>
                                                ))
                                            ) : (
                                                <p>Upload the images</p>
                                            )}
                                            <img src="assets/Image/uploadimg.png" alt="" />
                                            <input type="file" multiple onChange={handleImageChange} />
                                        </div>
                                        {imageError && <div className="error">{imageError}</div>}
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="checkbox" id="checkbox" value={checkboxValue} onChange={handleCheckboxChange} />
                                        <label htmlFor=""><b>Note :</b> When you purchase this coupon you can get some loyalty point </label>
                                    </div>
                                    {checkboxError && <div className="error">{checkboxError}</div>}
                                </div>
                                <div className="col-12">
                                    <div className="submit-button">
                                        <button type='submit' >save</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => { setShow(false) }}>
                <CuponAddPopup close={() => { setShow(false) }} />
            </Modal>
        </>
    )
}

export default Addnewdealform
