const Car = require("../models/car")


exports.test = (req, res) => {
    res.send("Test OK!")
}

exports.addCar = async (req, res) => {
    try {
        const newCar = req.body;

        const savedCar = new Car({
          ...newCar,
          addedBy: req.user._id, // Add the current user's ID directly
        });


        await savedCar.save()

        res.status(201).send({ msg: "Car added successfully", savedCar });

    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getCars = async (req, res) => {
    try {
        const foundCars = await Car.find()
        
        res.status(200).send({ msg: "All cars: ", foundCars });

    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCarById = async (req, res) => {
    try {
        const {id} = req.params

        const foundCar = await Car.findById(id)

        if (!foundCar) {
            return res.status(404).send({msg: "Car not found"});
        }

        res.status(200).send({msg: "Car found: ", foundCar});
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteCar = async (req, res) => {
    try {
        const { id } = req.params;

        const foundCar = await Car.findById(id);

        if (!foundCar) {
          return res.status(404).send({ msg: "Car not found" });
        }

        await Car.findByIdAndDelete(id);

        res.status(200).send({msg: "Car deleted successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.editCar = async (req, res) => {
    try {
        const {id} = req.params;

        const updatedCar = req.body;

        const editedCar = await Car.findByIdAndUpdate(id, updatedCar, {new: true});

        if (!editedCar) {
            return res.status(404).send({msg: "Car not found"});
        }

        res.status(200).send({msg: "Car updated successfully", editedCar});
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.getMyCars = async (req, res) => {
  try {
    const foundMyCars = await Car.find({addedBy: req.user._id});

    res.status(200).send({ msg: "All cars: ", foundMyCars });
  } catch (error) {
    res.status(500).send(error);
  }
};