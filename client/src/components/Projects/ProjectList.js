import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../utils/mutations";

const ProjectList = ({userId}) => {
    const {loading, error, data, refetch} = useQuery(PROJECTS_QUERY, {
        variables: {userId},
    });
}