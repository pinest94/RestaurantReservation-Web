<template>
<div class="container">
    <div class="header">
        <h3>회원 구분</h3>
    </div>
    <div> 
        <v-radio-group v-model="customerValue" row>
            <v-radio label="개인회원" value="Individual"></v-radio>
            <v-radio label="기업회원" value="Owner"></v-radio>
        </v-radio-group>
    </div>
    <div class="contents">
        <div class="title">
            <h2>회원가입</h2>
        </div>
        <individual v-if="customerValue === 'Individual'"></individual>
        <owner v-if="customerValue === 'Owner'"></owner>
    </div>    
</div>
</template>

<script>
import individual from "../components/register/IndividualInputForm"
import owner from "../components/register/OwnerInputForm"

export default {
    components: {
        individual,
        owner
    },
    data() {
        return {
            customerValue: "Individual",            
        }
    },    
}
</script>

<style>
    .contents {
        position: relative;
        margin: 30px auto;
        box-sizing: border-box;
        width: 50%;
        background-color: white;
        padding: 30px 40px;
        border: 1px solid white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .submit-btn {
        text-align: center;
    }
</style>

