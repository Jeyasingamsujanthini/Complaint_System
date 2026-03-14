type Props={
label:string
placeholder:string
}

export default function FormInput({label,placeholder}:Props){

return(

<div className="mb-5">

<label className="text-sm font-medium">
{label}
</label>

<input
placeholder={placeholder}
className="input-field"
/>

</div>

)

}