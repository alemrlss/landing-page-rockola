import { useState } from "react";
import { motion } from "framer-motion";
import api from "../../api/api";
import { FaUserPlus } from "react-icons/fa"; // Importa el icono de usuario
import { FaEye, FaEyeSlash } from "react-icons/fa";

function FormCompanies({
  formVariants,
  countries,
  cities,
  states,
  setStates,
  setCities,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    ruc: "",
    postalCode: "",
    countryId: "",
    stateId: "",
    cityId: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = (passwordType) => {
    if (passwordType === "password") {
      setShowPassword(!showPassword);
    } else if (passwordType === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setError("");
    setSuccess("");

    const updatedErrors = { ...errors };
    if (name === "password" || name === "confirmPassword") {
      delete updatedErrors["password"];
      delete updatedErrors["confirmPassword"];
    }
    delete updatedErrors[name];

    setErrors(updatedErrors);
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "countryId") {
      setFormData((prevData) => ({
        ...prevData,
        stateId: "",
        cityId: "",
        [name]: value,
      }));

      try {
        const response = await api.get(`/state/${value}`);
        setStates(response.data.data);
      } catch (error) {
        console.error("Error al obtener estados:", error);
      }
    }

    // Obtener ciudades al cambiar el estado
    if (name === "stateId") {
      setFormData((prevData) => ({ ...prevData, [name]: value }));

      try {
        const response = await api.get(`/city/${value}`);
        setCities(response.data.data);
      } catch (error) {
        console.error("Error al obtener ciudades:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const newErrors = {};

    const validateField = (fieldName, label) => {
      if (!formData[fieldName].trim()) {
        newErrors[fieldName] = `El ${label} es obligatorio`;
      } else {
        if (formData.password.length < 8) {
          newErrors.password = "La contraseña debe tener 8 caracteres o más";
        }
        if (formData.phone.length > 13) {
          newErrors.phone =
            "El número de teléfono debe tener maximo 13 dígitos";
        }
        if (formData.postalCode.length < 4) {
          newErrors.postalCode = "El código postal debe tener 4 dígitos";
        }
        if (formData.name.length > 25 || formData.name.length < 2) {
          newErrors.name = "El nombre debe tener entre 2 y 25 caracteres";
        }
      }
    };

    validateField("name", "Nombre");
    validateField("email", "Correo Electrónico");
    validateField("phone", "Número de Teléfono");
    validateField("password", "Contraseña");
    validateField("confirmPassword", "Confirmar Contraseña");
    validateField("address", "Dirección");
    validateField("postalCode", "Código Postal");
    validateField("countryId", "País");
    validateField("stateId", "Estado");
    validateField("cityId", "Ciudad");

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Las contraseñas no coinciden";
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    // Validar que el correo sea válido
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formDataToSend = {
        name: formData.name,
        ruc: null,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
        postalCode: formData.postalCode,
        countryId: parseInt(formData.countryId),
        stateId: parseInt(formData.stateId),
        cityId: parseInt(formData.cityId),
        logo: "logo-test.png",
        type: 23,
      };
      try {
        setLoading(true);
        const response = await api.post("/auth/register", formDataToSend);
        console.log(response);
        setLoading(false);
        setSuccess("Empresa registrada con éxito");

        setFormData({
          name: "",
          ruc: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          address: "",
          postalCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
        });
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } catch (error) {
        console.error("Error al registrar la empresa:", error);
        if (error.response.data.message === "USER_EXIST") {
          setError("La empresa ya existe");
          setLoading(false);
          return;
        }

        if (Array.isArray(error.response.data.message)) {
          if (
            error.response.data.message[0] ===
            "password must be longer than or equal to 8 characters"
          ) {
            setError("La contraseña debe tener 8 caracteres o más");
            setLoading(false);
            return;
          }
          if (
            error.response.data.message[0] === "The minimum age is 18 years."
          ) {
            setError("La edad mínima es de 18 años");
            setLoading(false);
            return;
          }
          setError("Error al registrar la empresa, intente nuevamente");
          setLoading(false);
          return;
        }

        setError("Error al registrar usuario");
        setLoading(false);
      }
    }
  };

  return (
    <motion.form
      className="mt-8 p-6 bg-[#1F1E1E] rounded-lg text-white max-w-4xl mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-2xl font-semibold mb-4">
        Registro de Establecimiento
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-1">
        <div className="mb-1">
          <label htmlFor="name" className="block text-sm font-bold">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            placeholder="John"
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && (
            <div className="text-red-500 text-sm">{errors.name}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-bold">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="block text-sm font-bold">
            Teléfono
          </label>
          <input
            type="text"
            name="phone"
            placeholder="48455674"
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          {errors.phone && (
            <div className="text-red-500 text-sm">{errors.phone}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block text-sm font-bold">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              className={`p-3 rounded-md text-black border-2 w-full ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => handleTogglePassword("password")}
            >
              {showPassword ? (
                <FaEyeSlash className="text-black" />
              ) : (
                <FaEye className="text-black" />
              )}
            </div>
          </div>
          {errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="confirmPassword" className="block text-sm font-bold">
            Confirmar Contraseña
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              className={`p-3 rounded-md text-black border-2 w-full ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => handleTogglePassword("confirmPassword")}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-black" />
              ) : (
                <FaEye className="text-black" />
              )}{" "}
            </div>
          </div>
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-2 justify-center items-center">
        <div className="mb-2 w-full md:w-3/4">
          <label htmlFor="address" className="block text-sm font-bold">
            Dirección
          </label>
          <input
            type="text"
            name="address"
            placeholder="Av. Siempre Viva 123"
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.address
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          {errors.address && (
            <div className="text-red-500 text-sm">{errors.address}</div>
          )}
        </div>

        <div className="mb-2 w-full md:w-1/4">
          <label htmlFor="postalCode" className="block text-sm font-bold">
            Código Postal
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="4001.."
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.postalCode
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
          {errors.postalCode && (
            <div className="text-red-500 text-sm">{errors.postalCode}</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
        <div className="mb-2">
          <label htmlFor="countryId" className="block text-sm font-bold">
            País
          </label>
          <select
            name="countryId"
            id="countryId"
            onChange={handleInputChange}
            value={formData.countryId}
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.countryId
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            required
          >
            <option value="" disabled>
              Seleccione un país
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countryId && (
            <div className="text-red-500 text-sm">{errors.countryId}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="stateId" className="block text-sm font-bold">
            Estado
          </label>
          <select
            name="stateId"
            id="stateId"
            onChange={handleInputChange}
            value={formData.stateId}
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.cityId
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            required
          >
            <option value="" disabled>
              Seleccione un estado
            </option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.stateId && (
            <div className="text-red-500 text-sm">{errors.stateId}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="cityId" className="block text-sm font-bold">
            Ciudad
          </label>
          <select
            name="cityId"
            id="cityId"
            onChange={handleInputChange}
            value={formData.cityId}
            className={`p-3 rounded-md text-black border-2 w-full ${
              errors.cityId
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            required
          >
            <option value="" disabled>
              Seleccione una ciudad
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.cityId && (
            <div className="text-red-500 text-sm">{errors.cityId}</div>
          )}
        </div>
        {success && (
          <div className=" text-green-500 font-bold text-center flex justify-center items-center rounded-md p-2 my-2">
            {success}
          </div>
        )}
        {error && (
          <div className=" text-red-500 font-bold text-center flex justify-center items-center rounded-md p-2 my-2">
            {error}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mb-2">
        {loading ? (
          <div role="status" className="mt-2">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <motion.button
            type="submit"
            className="bg-orange-600 mt-2 text-white text-lg rounded-full flex justify-center items-center p-2 w-full "
            onClick={handleSubmit}
            whileTap={{ scale: 1.05 }}
          >
            Registrar <FaUserPlus className="ml-2 h-4 w-4" />
          </motion.button>
        )}
      </div>
    </motion.form>
  );
}

export default FormCompanies;
