const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema(
  {
    category: {
      type: String,
      enum: ["resale", "rental"],
      default: "resale",
    },
    propertyType: {
      type: String,
      enum: [
        "apartment",
        "banglow",
        "independent-house",
        "villa",
        "gated-community",
        "plot",
      ],
      default: "villa",
    },
    gatedCommunity: {
      type: Boolean,
      default: false,
    },
    configuration: {
      type: String,
      enum: [
        "1RK",
        "1BHK",
        "2BHK",
        "3BHK",
        "3.5BHK",
        "4BHK",
        "4+BHK",
        "penthouse",
        "villa",
        "plot",
      ],
      default: "1BHK",
    },
    directionFacing: {
      type: String,
      enum: [
        "north",
        "south",
        "east",
        "west",
        "north-west",
        "north-east",
        "south-east",
        "south-west",
      ],
      default: "north",
    },
    projectName: {
      type: String,
      default: "N/A",
    },
    builderName: {
      type: String,
      default: "N/A",
    },
    visitorName: {
      type: String,
      default: "N/A",
    },
    plotConfiguration: {
      type: String,
      default: "N/A",
    },
    mobile: {
      type: Number,
      default: null,
    },
    alternateNumber: {
      type: Number,
      default: null,
    },
    addressLine1: {
      type: String,
      default: "N/A",
    },
    addressLine2: {
      type: String,
      default: "N/A",
    },
    landmarks: {
      type: String,
      default: "N/A",
    },
    city: {
      type: String,
      default: "N/A",
    },
    state: {
      type: String,
      default: "N/A",
    },
    country: {
      type: String,
      default: "N/A",
    },
    pincode: {
      type: Number,
      default: null,
    },
    nearbyPlaces: {
      type: String,
      default: "N/A",
    },
    lat: {
      type: Number,
      default: null,
    },
    lng: {
      type: Number,
      default: null,
    },
    documents: {
      registrationForm: {
        type: String,
        default: null,
      },
      resaleForm: {
        type: String,
        default: null,
      },
      rentalForm: {
        type: String,
        default: null,
      },
      propertyInspectionForm: {
        type: String,
        default: null,
      },
      rentalAgreement: {
        type: String,
        default: null,
      },
      mou: {
        type: String,
        default: null,
      },
    },
    description: {
      type: String,
      default: "N/A",
    },
    amenities: {
      cyclingTrack: {
        type: Boolean,
        default: false,
      },
      yogaDeck: {
        type: Boolean,
        default: false,
      },
      outdoorGym: {
        type: Boolean,
        default: false,
      },
      indoorGym: {
        type: Boolean,
        default: false,
      },
      yogaRoom: {
        type: Boolean,
        default: false,
      },
      spa: {
        type: Boolean,
        default: false,
      },
      steamAndSauna: {
        type: Boolean,
        default: false,
      },
      kidsPool: {
        type: Boolean,
        default: false,
      },
      swimmingPool: {
        type: Boolean,
        default: false,
      },
      aerobicsStudio: {
        type: Boolean,
        default: false,
      },
      badmintonCourt: {
        type: Boolean,
        default: false,
      },
      basketballCourt: {
        type: Boolean,
        default: false,
      },
      volleyBallCourt: {
        type: Boolean,
        default: false,
      },
      squashCourt: {
        type: Boolean,
        default: false,
      },
      tennisCourt: {
        type: Boolean,
        default: false,
      },
      cricketPitch: {
        type: Boolean,
        default: false,
      },
      tableTennis: {
        type: Boolean,
        default: false,
      },
      boxCricket: {
        type: Boolean,
        default: false,
      },
      golf: {
        type: Boolean,
        default: false,
      },
      multipurposeCourt: {
        type: Boolean,
        default: false,
      },
      billiards: {
        type: Boolean,
        default: false,
      },
      skatingRink: {
        type: Boolean,
        default: false,
      },
      playArea: {
        type: Boolean,
        default: false,
      },
      library: {
        type: Boolean,
        default: false,
      },
      creche: {
        type: Boolean,
        default: false,
      },
      danceStudio: {
        type: Boolean,
        default: false,
      },
      videoGameRoom: {
        type: Boolean,
        default: false,
      },
      adventureSports: {
        type: Boolean,
        default: false,
      },
      oat: {
        type: Boolean,
        default: false,
      },
      miniTheatre: {
        type: Boolean,
        default: false,
      },
      functionHall: {
        type: Boolean,
        default: false,
      },
      banquetHall: {
        type: Boolean,
        default: false,
      },
      cafe: {
        type: Boolean,
        default: false,
      },
      barbequePit: {
        type: Boolean,
        default: false,
      },
      parks: {
        type: Boolean,
        default: false,
      },
      seniorCitizenCorner: {
        type: Boolean,
        default: false,
      },
      restHouse: {
        type: Boolean,
        default: false,
      },
      natureTrail: {
        type: Boolean,
        default: false,
      },
      terraceGarden: {
        type: Boolean,
        default: false,
      },
      airConditioner: {
        type: Boolean,
        default: false,
      },
      interCom: {
        type: Boolean,
        default: false,
      },
      internet: {
        type: Boolean,
        default: false,
      },
      petPark: {
        type: Boolean,
        default: false,
      },
      gatedSecurity: {
        type: Boolean,
        default: false,
      },
      cctv: {
        type: Boolean,
        default: false,
      },
      fireAlarm: {
        type: Boolean,
        default: false,
      },
      fireExtinguisher: {
        type: Boolean,
        default: false,
      },
      waterSprinkler: {
        type: Boolean,
        default: false,
      },
      entranceLobby: {
        type: Boolean,
        default: false,
      },
      atm: {
        type: Boolean,
        default: false,
      },
      businessCenter: {
        type: Boolean,
        default: false,
      },
      superMarket: {
        type: Boolean,
        default: false,
      },
      coWorkingSpace: {
        type: Boolean,
        default: false,
      },
      lift: {
        type: Boolean,
        default: false,
      },
      laundary: {
        type: Boolean,
        default: false,
      },
      pharmacy: {
        type: Boolean,
        default: false,
      },
      salon: {
        type: Boolean,
        default: false,
      },
      groceryStore: {
        type: Boolean,
        default: false,
      },
      houseKeeping: {
        type: Boolean,
        default: false,
      },
      powerBackup: {
        type: Boolean,
        default: false,
      },
      waterSupply247: {
        type: Boolean,
        default: false,
      },
      gasPipeline: {
        type: Boolean,
        default: false,
      },
      garbageChute: {
        type: Boolean,
        default: false,
      },
      rainwaterHarvesting: {
        type: Boolean,
        default: false,
      },
      wasteConverter: {
        type: Boolean,
        default: false,
      },
      solarHeater: {
        type: Boolean,
        default: false,
      },
      solarLightning: {
        type: Boolean,
        default: false,
      },
      carCharging: {
        type: Boolean,
        default: false,
      },
      sewageTreatmentPlant: {
        type: Boolean,
        default: false,
      },
      pavedCompound: {
        type: Boolean,
        default: false,
      },
      visitorParking: {
        type: Boolean,
        default: false,
      },
    },
    bookingPricing: {
      expectedPrice: {
        type: Number,
        default: null,
      },
      negotiatedPrice: {
        type: Number,
        default: null,
      },
      closedPrice: {
        type: Number,
        default: null,
      },
      deposit: {
        type: Number,
        default: null,
      },
      maintenanceCharges1: {
        type: Number,
        default: null,
      },
      expectedPropertyValue: {
        type: Number,
        default: null,
      },
      negotiatedPropertyValue: {
        type: Number,
        default: null,
      },
      closedPropertyValue: {
        type: Number,
        default: null,
      },
      monthlyRental: {
        type: Number,
        default: null,
      },
      maintenanceCharges2: {
        type: Number,
        default: null,
      },
      leaseAmount: {
        type: Number,
        default: null,
      },
      isNegotiable: {
        type: Boolean,
        default: false,
      },
      leaseDuration: {
        type: Number,
        default: null,
      },
      dateOfBooking: {
        type: Number,
        default: null,
      },
      lenderName: {
        type: String,
        default: "N/A",
      },
      agreementStatus: {
        type: Boolean,
        default: false,
      },
      mortgaged: {
        type: Boolean,
        default: false,
      },
      outstandingLoan: {
        type: Number,
        default: null,
      },
      totalLoan: {
        type: Number,
        default: null,
      },
      interestRate: {
        type: Number,
        default: null,
      },
    },
    furnishingStatus: {
      type: String,
      enum: ["full", "semi", "none", "N/A"],
      default: "N/A",
    },
    tenancyStatus: {
      type: String,
      enum: ["vaccant", "immediate", "unavailable", ">30"],
      default: "vaccant",
    },
    availableFrom: {
      type: Number,
      default: null,
    },
    parking: {
      type: String,
      enum: ["car", "bike", "both", "none"],
      default: "both",
    },
    visitorParking: {
      type: Boolean,
      default: false,
    },
    unitName: {
      type: String,
      default: "N/A",
    },
    parkingType: {
      type: String,
      default: "N/A",
    },
    noOfParking: {
      type: Number,
      default: null,
    },
    preferredTenants: {
      type: String,
      enum: ["family", "bachelors", "spinsters"],
      default: "family",
    },
    nonVegAllowed: {
      type: Boolean,
      default: false,
    },
    waterSupply: {
      type: String,
      default: "N/A",
    },
    propertyAge: {
      type: String,
      default: "N/A",
    },
    carpetArea: {
      type: Number,
      default: null,
    },
    towerName: {
      type: String,
      default: "N/A",
    },
    phase: {
      type: String,
      default: "N/A",
    },
    pets: {
      type: Boolean,
      default: false,
    },
    launchDate: {
      type: Number,
      default: null,
    },
    totalArea: {
      type: Number,
      default: null,
    },
    floor: {
      type: String,
      default: "N/A",
    },
    rooms: {
      type: Number,
      default: null,
    },
    bathrooms: {
      type: String,
      default: "",
    },
    balcony: {
      type: Number,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    siteInspectionStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    registration: {
      type: Boolean,
      default: false,
    },
    saleDeed: {
      type: Boolean,
      default: false,
    },
    khata: {
      type: Boolean,
      default: false,
    },
    ec: {
      type: Boolean,
      default: false,
    },
    propertyTax: {
      type: Boolean,
      default: false,
    },
    constructionStatus: {
      type: String,
      enum: ["under-construction", "nearing-completion", "RTMI"],
      default: "RTMI",
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Property =
  mongoose.models.Property || mongoose.model("Property", PropertySchema);
module.exports = Property;
