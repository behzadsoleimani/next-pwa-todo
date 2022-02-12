import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllList, updateList } from "../api";
import { IListItems } from "../types";


export const useAllList = () => {
    return useQuery("list", getAllList)
};


export const useUpdateList = () => {
    const queryClient = useQueryClient()
    return useMutation(updateList, {
        onSuccess: async (_: any, list: IListItems) => {
            queryClient.setQueryData("list", list)

        }
    });
}

