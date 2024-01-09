/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataKubernetesPodV1SpecInitContainerLivenessProbeExecList,
DataKubernetesPodV1SpecInitContainerLivenessProbeGrpcList,
DataKubernetesPodV1SpecInitContainerLivenessProbeHttpGetList,
DataKubernetesPodV1SpecInitContainerEnvList,
DataKubernetesPodV1SpecInitContainerEnvFromList,
DataKubernetesPodV1SpecInitContainerLifecycleList,
DataKubernetesPodV1SpecAffinityList,
DataKubernetesPodV1SpecContainerList,
DataKubernetesPodV1SpecDnsConfigList,
DataKubernetesPodV1SpecHostAliasesList,
DataKubernetesPodV1SpecImagePullSecretsList } from './structs0'
export interface DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocket {
}

export function dataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketOutputReference {
    return new DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerLivenessProbe {
}

export function dataKubernetesPodV1SpecInitContainerLivenessProbeToTerraform(struct?: DataKubernetesPodV1SpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataKubernetesPodV1SpecInitContainerLivenessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataKubernetesPodV1SpecInitContainerLivenessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataKubernetesPodV1SpecInitContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataKubernetesPodV1SpecInitContainerLivenessProbeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerLivenessProbeOutputReference {
    return new DataKubernetesPodV1SpecInitContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerPort {
}

export function dataKubernetesPodV1SpecInitContainerPortToTerraform(struct?: DataKubernetesPodV1SpecInitContainerPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataKubernetesPodV1SpecInitContainerPortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerPortOutputReference {
    return new DataKubernetesPodV1SpecInitContainerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbeExec {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeExecToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeExecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeExecOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbeGrpc {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeGrpcToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeGrpcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeGrpcOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeader {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGet {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocket {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerReadinessProbe {
}

export function dataKubernetesPodV1SpecInitContainerReadinessProbeToTerraform(struct?: DataKubernetesPodV1SpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataKubernetesPodV1SpecInitContainerReadinessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataKubernetesPodV1SpecInitContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataKubernetesPodV1SpecInitContainerReadinessProbeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerReadinessProbeOutputReference {
    return new DataKubernetesPodV1SpecInitContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerResources {
}

export function dataKubernetesPodV1SpecInitContainerResourcesToTerraform(struct?: DataKubernetesPodV1SpecInitContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataKubernetesPodV1SpecInitContainerResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerResourcesOutputReference {
    return new DataKubernetesPodV1SpecInitContainerResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerSecurityContextCapabilities {
}

export function dataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: DataKubernetesPodV1SpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesOutputReference {
    return new DataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptions {
}

export function dataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsOutputReference {
    return new DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfile {
}

export function dataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileToTerraform(struct?: DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileOutputReference {
    return new DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerSecurityContext {
}

export function dataKubernetesPodV1SpecInitContainerSecurityContextToTerraform(struct?: DataKubernetesPodV1SpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataKubernetesPodV1SpecInitContainerSecurityContextCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataKubernetesPodV1SpecInitContainerSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }
}

export class DataKubernetesPodV1SpecInitContainerSecurityContextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerSecurityContextOutputReference {
    return new DataKubernetesPodV1SpecInitContainerSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbeExec {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeExecToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeExecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeExecOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbeGrpc {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeGrpcToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeGrpcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeGrpcOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeader {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbeHttpGet {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeHttpGetToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocket {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerStartupProbe {
}

export function dataKubernetesPodV1SpecInitContainerStartupProbeToTerraform(struct?: DataKubernetesPodV1SpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataKubernetesPodV1SpecInitContainerStartupProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataKubernetesPodV1SpecInitContainerStartupProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataKubernetesPodV1SpecInitContainerStartupProbeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerStartupProbeOutputReference {
    return new DataKubernetesPodV1SpecInitContainerStartupProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainerVolumeMount {
}

export function dataKubernetesPodV1SpecInitContainerVolumeMountToTerraform(struct?: DataKubernetesPodV1SpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerVolumeMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainerVolumeMount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainerVolumeMount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataKubernetesPodV1SpecInitContainerVolumeMountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerVolumeMountOutputReference {
    return new DataKubernetesPodV1SpecInitContainerVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecInitContainer {
}

export function dataKubernetesPodV1SpecInitContainerToTerraform(struct?: DataKubernetesPodV1SpecInitContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecInitContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecInitContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecInitContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataKubernetesPodV1SpecInitContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // env_from - computed: true, optional: false, required: false
  private _envFrom = new DataKubernetesPodV1SpecInitContainerEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataKubernetesPodV1SpecInitContainerLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }

  // liveness_probe - computed: true, optional: false, required: false
  private _livenessProbe = new DataKubernetesPodV1SpecInitContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  private _port = new DataKubernetesPodV1SpecInitContainerPortList(this, "port", false);
  public get port() {
    return this._port;
  }

  // readiness_probe - computed: true, optional: false, required: false
  private _readinessProbe = new DataKubernetesPodV1SpecInitContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataKubernetesPodV1SpecInitContainerResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataKubernetesPodV1SpecInitContainerSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // startup_probe - computed: true, optional: false, required: false
  private _startupProbe = new DataKubernetesPodV1SpecInitContainerStartupProbeList(this, "startup_probe", false);
  public get startupProbe() {
    return this._startupProbe;
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  private _volumeMount = new DataKubernetesPodV1SpecInitContainerVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}

export class DataKubernetesPodV1SpecInitContainerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecInitContainerOutputReference {
    return new DataKubernetesPodV1SpecInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecOs {
}

export function dataKubernetesPodV1SpecOsToTerraform(struct?: DataKubernetesPodV1SpecOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKubernetesPodV1SpecOsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecOsOutputReference {
    return new DataKubernetesPodV1SpecOsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecReadinessGate {
}

export function dataKubernetesPodV1SpecReadinessGateToTerraform(struct?: DataKubernetesPodV1SpecReadinessGate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecReadinessGateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecReadinessGate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecReadinessGate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataKubernetesPodV1SpecReadinessGateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecReadinessGateOutputReference {
    return new DataKubernetesPodV1SpecReadinessGateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecSecurityContextSeLinuxOptions {
}

export function dataKubernetesPodV1SpecSecurityContextSeLinuxOptionsToTerraform(struct?: DataKubernetesPodV1SpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodV1SpecSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecSecurityContextSeLinuxOptionsOutputReference {
    return new DataKubernetesPodV1SpecSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecSecurityContextSeccompProfile {
}

export function dataKubernetesPodV1SpecSecurityContextSeccompProfileToTerraform(struct?: DataKubernetesPodV1SpecSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodV1SpecSecurityContextSeccompProfileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecSecurityContextSeccompProfileOutputReference {
    return new DataKubernetesPodV1SpecSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecSecurityContextSysctl {
}

export function dataKubernetesPodV1SpecSecurityContextSysctlToTerraform(struct?: DataKubernetesPodV1SpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecSecurityContextSysctlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecSecurityContextSysctl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecSecurityContextSysctl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodV1SpecSecurityContextSysctlList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecSecurityContextSysctlOutputReference {
    return new DataKubernetesPodV1SpecSecurityContextSysctlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecSecurityContextWindowsOptions {
}

export function dataKubernetesPodV1SpecSecurityContextWindowsOptionsToTerraform(struct?: DataKubernetesPodV1SpecSecurityContextWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecSecurityContextWindowsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecSecurityContextWindowsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gmsa_credential_spec - computed: true, optional: false, required: false
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }

  // gmsa_credential_spec_name - computed: true, optional: false, required: false
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }

  // host_process - computed: true, optional: false, required: false
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }

  // run_as_username - computed: true, optional: false, required: false
  public get runAsUsername() {
    return this.getStringAttribute('run_as_username');
  }
}

export class DataKubernetesPodV1SpecSecurityContextWindowsOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecSecurityContextWindowsOptionsOutputReference {
    return new DataKubernetesPodV1SpecSecurityContextWindowsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecSecurityContext {
}

export function dataKubernetesPodV1SpecSecurityContextToTerraform(struct?: DataKubernetesPodV1SpecSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }

  // fs_group_change_policy - computed: true, optional: false, required: false
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataKubernetesPodV1SpecSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataKubernetesPodV1SpecSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }

  // supplemental_groups - computed: true, optional: false, required: false
  public get supplementalGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supplemental_groups')));
  }

  // sysctl - computed: true, optional: false, required: false
  private _sysctl = new DataKubernetesPodV1SpecSecurityContextSysctlList(this, "sysctl", false);
  public get sysctl() {
    return this._sysctl;
  }

  // windows_options - computed: true, optional: false, required: false
  private _windowsOptions = new DataKubernetesPodV1SpecSecurityContextWindowsOptionsList(this, "windows_options", false);
  public get windowsOptions() {
    return this._windowsOptions;
  }
}

export class DataKubernetesPodV1SpecSecurityContextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecSecurityContextOutputReference {
    return new DataKubernetesPodV1SpecSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecToleration {
}

export function dataKubernetesPodV1SpecTolerationToTerraform(struct?: DataKubernetesPodV1SpecToleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecTolerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecToleration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecToleration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodV1SpecTolerationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecTolerationOutputReference {
    return new DataKubernetesPodV1SpecTolerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressions {
}

export function dataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference {
    return new DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelector {
}

export function dataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorOutputReference {
    return new DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecTopologySpreadConstraint {
}

export function dataKubernetesPodV1SpecTopologySpreadConstraintToTerraform(struct?: DataKubernetesPodV1SpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecTopologySpreadConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecTopologySpreadConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // max_skew - computed: true, optional: false, required: false
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }

  // when_unsatisfiable - computed: true, optional: false, required: false
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
}

export class DataKubernetesPodV1SpecTopologySpreadConstraintList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecTopologySpreadConstraintOutputReference {
    return new DataKubernetesPodV1SpecTopologySpreadConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeAwsElasticBlockStore {
}

export function dataKubernetesPodV1SpecVolumeAwsElasticBlockStoreToTerraform(struct?: DataKubernetesPodV1SpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeAwsElasticBlockStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeAwsElasticBlockStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataKubernetesPodV1SpecVolumeAwsElasticBlockStoreList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeAwsElasticBlockStoreOutputReference {
    return new DataKubernetesPodV1SpecVolumeAwsElasticBlockStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeAzureDisk {
}

export function dataKubernetesPodV1SpecVolumeAzureDiskToTerraform(struct?: DataKubernetesPodV1SpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeAzureDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeAzureDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching_mode - computed: true, optional: false, required: false
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: false
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodV1SpecVolumeAzureDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeAzureDiskOutputReference {
    return new DataKubernetesPodV1SpecVolumeAzureDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeAzureFile {
}

export function dataKubernetesPodV1SpecVolumeAzureFileToTerraform(struct?: DataKubernetesPodV1SpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeAzureFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeAzureFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}

export class DataKubernetesPodV1SpecVolumeAzureFileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeAzureFileOutputReference {
    return new DataKubernetesPodV1SpecVolumeAzureFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeCephFsSecretRef {
}

export function dataKubernetesPodV1SpecVolumeCephFsSecretRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeCephFsSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeCephFsSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodV1SpecVolumeCephFsSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeCephFsSecretRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeCephFsSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeCephFs {
}

export function dataKubernetesPodV1SpecVolumeCephFsToTerraform(struct?: DataKubernetesPodV1SpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeCephFs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeCephFs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitors - computed: true, optional: false, required: false
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: false
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodV1SpecVolumeCephFsSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodV1SpecVolumeCephFsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeCephFsOutputReference {
    return new DataKubernetesPodV1SpecVolumeCephFsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeCinder {
}

export function dataKubernetesPodV1SpecVolumeCinderToTerraform(struct?: DataKubernetesPodV1SpecVolumeCinder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeCinder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeCinder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataKubernetesPodV1SpecVolumeCinderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeCinderOutputReference {
    return new DataKubernetesPodV1SpecVolumeCinderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeConfigMapItems {
}

export function dataKubernetesPodV1SpecVolumeConfigMapItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeConfigMapItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeConfigMapItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeConfigMap {
}

export function dataKubernetesPodV1SpecVolumeConfigMapToTerraform(struct?: DataKubernetesPodV1SpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodV1SpecVolumeConfigMapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeConfigMapOutputReference {
    return new DataKubernetesPodV1SpecVolumeConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRef {
}

export function dataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeCsi {
}

export function dataKubernetesPodV1SpecVolumeCsiToTerraform(struct?: DataKubernetesPodV1SpecVolumeCsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeCsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeCsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: false
  private _nodePublishSecretRef = new DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRefList(this, "node_publish_secret_ref", false);
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: false
  private _volumeAttributes = new cdktf.StringMap(this, "volume_attributes");
  public get volumeAttributes() {
    return this._volumeAttributes;
  }
}

export class DataKubernetesPodV1SpecVolumeCsiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeCsiOutputReference {
    return new DataKubernetesPodV1SpecVolumeCsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRef {
}

export function dataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRef {
}

export function dataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeDownwardApiItems {
}

export function dataKubernetesPodV1SpecVolumeDownwardApiItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeDownwardApiItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeDownwardApi {
}

export function dataKubernetesPodV1SpecVolumeDownwardApiToTerraform(struct?: DataKubernetesPodV1SpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataKubernetesPodV1SpecVolumeDownwardApiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeDownwardApiOutputReference {
    return new DataKubernetesPodV1SpecVolumeDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEmptyDir {
}

export function dataKubernetesPodV1SpecVolumeEmptyDirToTerraform(struct?: DataKubernetesPodV1SpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}

export class DataKubernetesPodV1SpecVolumeEmptyDirList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEmptyDirOutputReference {
    return new DataKubernetesPodV1SpecVolumeEmptyDirOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadata {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResources {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelector {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpec {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_modes - computed: true, optional: false, required: false
  public get accessModes() {
    return cdktf.Fn.tolist(this.getListAttribute('access_modes'));
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // selector - computed: true, optional: false, required: false
  private _selector = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }

  // storage_class_name - computed: true, optional: false, required: false
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }

  // volume_mode - computed: true, optional: false, required: false
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplate {
}

export function dataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeEphemeral {
}

export function dataKubernetesPodV1SpecVolumeEphemeralToTerraform(struct?: DataKubernetesPodV1SpecVolumeEphemeral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeEphemeral | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeEphemeral | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_claim_template - computed: true, optional: false, required: false
  private _volumeClaimTemplate = new DataKubernetesPodV1SpecVolumeEphemeralVolumeClaimTemplateList(this, "volume_claim_template", false);
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
}

export class DataKubernetesPodV1SpecVolumeEphemeralList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeEphemeralOutputReference {
    return new DataKubernetesPodV1SpecVolumeEphemeralOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeFc {
}

export function dataKubernetesPodV1SpecVolumeFcToTerraform(struct?: DataKubernetesPodV1SpecVolumeFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeFc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeFc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: false
  public get targetWwNs() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ww_ns'));
  }
}

export class DataKubernetesPodV1SpecVolumeFcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeFcOutputReference {
    return new DataKubernetesPodV1SpecVolumeFcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeFlexVolumeSecretRef {
}

export function dataKubernetesPodV1SpecVolumeFlexVolumeSecretRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeFlexVolumeSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeFlexVolumeSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodV1SpecVolumeFlexVolumeSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeFlexVolumeSecretRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeFlexVolumeSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeFlexVolume {
}

export function dataKubernetesPodV1SpecVolumeFlexVolumeToTerraform(struct?: DataKubernetesPodV1SpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeFlexVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeFlexVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodV1SpecVolumeFlexVolumeSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataKubernetesPodV1SpecVolumeFlexVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeFlexVolumeOutputReference {
    return new DataKubernetesPodV1SpecVolumeFlexVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeFlocker {
}

export function dataKubernetesPodV1SpecVolumeFlockerToTerraform(struct?: DataKubernetesPodV1SpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeFlocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeFlocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: false
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}

export class DataKubernetesPodV1SpecVolumeFlockerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeFlockerOutputReference {
    return new DataKubernetesPodV1SpecVolumeFlockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeGcePersistentDisk {
}

export function dataKubernetesPodV1SpecVolumeGcePersistentDiskToTerraform(struct?: DataKubernetesPodV1SpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeGcePersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeGcePersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: false
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodV1SpecVolumeGcePersistentDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeGcePersistentDiskOutputReference {
    return new DataKubernetesPodV1SpecVolumeGcePersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeGitRepo {
}

export function dataKubernetesPodV1SpecVolumeGitRepoToTerraform(struct?: DataKubernetesPodV1SpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}

export class DataKubernetesPodV1SpecVolumeGitRepoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeGitRepoOutputReference {
    return new DataKubernetesPodV1SpecVolumeGitRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeGlusterfs {
}

export function dataKubernetesPodV1SpecVolumeGlusterfsToTerraform(struct?: DataKubernetesPodV1SpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeGlusterfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeGlusterfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints_name - computed: true, optional: false, required: false
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodV1SpecVolumeGlusterfsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeGlusterfsOutputReference {
    return new DataKubernetesPodV1SpecVolumeGlusterfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeHostPath {
}

export function dataKubernetesPodV1SpecVolumeHostPathToTerraform(struct?: DataKubernetesPodV1SpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodV1SpecVolumeHostPathList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeHostPathOutputReference {
    return new DataKubernetesPodV1SpecVolumeHostPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeIscsi {
}

export function dataKubernetesPodV1SpecVolumeIscsiToTerraform(struct?: DataKubernetesPodV1SpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeIscsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeIscsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: false
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: false
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}

export class DataKubernetesPodV1SpecVolumeIscsiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeIscsiOutputReference {
    return new DataKubernetesPodV1SpecVolumeIscsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeLocal {
}

export function dataKubernetesPodV1SpecVolumeLocalToTerraform(struct?: DataKubernetesPodV1SpecVolumeLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeLocalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeLocalOutputReference {
    return new DataKubernetesPodV1SpecVolumeLocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeNfs {
}

export function dataKubernetesPodV1SpecVolumeNfsToTerraform(struct?: DataKubernetesPodV1SpecVolumeNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataKubernetesPodV1SpecVolumeNfsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeNfsOutputReference {
    return new DataKubernetesPodV1SpecVolumeNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumePersistentVolumeClaim {
}

export function dataKubernetesPodV1SpecVolumePersistentVolumeClaimToTerraform(struct?: DataKubernetesPodV1SpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumePersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumePersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodV1SpecVolumePersistentVolumeClaimList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumePersistentVolumeClaimOutputReference {
    return new DataKubernetesPodV1SpecVolumePersistentVolumeClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumePhotonPersistentDisk {
}

export function dataKubernetesPodV1SpecVolumePhotonPersistentDiskToTerraform(struct?: DataKubernetesPodV1SpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumePhotonPersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumePhotonPersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: false
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}

export class DataKubernetesPodV1SpecVolumePhotonPersistentDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumePhotonPersistentDiskOutputReference {
    return new DataKubernetesPodV1SpecVolumePhotonPersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItems {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMap {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItems {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApi {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItems {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesSecret {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesSecretToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecretList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesSecretOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountToken {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: false
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjectedSources {
}

export function dataKubernetesPodV1SpecVolumeProjectedSourcesToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjectedSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjectedSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataKubernetesPodV1SpecVolumeProjectedSourcesSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // service_account_token - computed: true, optional: false, required: false
  private _serviceAccountToken = new DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountTokenList(this, "service_account_token", false);
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedSourcesOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeProjected {
}

export function dataKubernetesPodV1SpecVolumeProjectedToTerraform(struct?: DataKubernetesPodV1SpecVolumeProjected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeProjected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeProjected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataKubernetesPodV1SpecVolumeProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataKubernetesPodV1SpecVolumeProjectedList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeProjectedOutputReference {
    return new DataKubernetesPodV1SpecVolumeProjectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeQuobyte {
}

export function dataKubernetesPodV1SpecVolumeQuobyteToTerraform(struct?: DataKubernetesPodV1SpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeQuobyte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeQuobyte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class DataKubernetesPodV1SpecVolumeQuobyteList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeQuobyteOutputReference {
    return new DataKubernetesPodV1SpecVolumeQuobyteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeRbdSecretRef {
}

export function dataKubernetesPodV1SpecVolumeRbdSecretRefToTerraform(struct?: DataKubernetesPodV1SpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeRbdSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeRbdSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodV1SpecVolumeRbdSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeRbdSecretRefOutputReference {
    return new DataKubernetesPodV1SpecVolumeRbdSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeRbd {
}

export function dataKubernetesPodV1SpecVolumeRbdToTerraform(struct?: DataKubernetesPodV1SpecVolumeRbd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeRbd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeRbd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceph_monitors - computed: true, optional: false, required: false
  public get cephMonitors() {
    return cdktf.Fn.tolist(this.getListAttribute('ceph_monitors'));
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: false
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: false
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: false
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodV1SpecVolumeRbdSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataKubernetesPodV1SpecVolumeRbdList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeRbdOutputReference {
    return new DataKubernetesPodV1SpecVolumeRbdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeSecretItems {
}

export function dataKubernetesPodV1SpecVolumeSecretItemsToTerraform(struct?: DataKubernetesPodV1SpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodV1SpecVolumeSecretItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeSecretItemsOutputReference {
    return new DataKubernetesPodV1SpecVolumeSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeSecret {
}

export function dataKubernetesPodV1SpecVolumeSecretToTerraform(struct?: DataKubernetesPodV1SpecVolumeSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodV1SpecVolumeSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}

export class DataKubernetesPodV1SpecVolumeSecretList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeSecretOutputReference {
    return new DataKubernetesPodV1SpecVolumeSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolumeVsphereVolume {
}

export function dataKubernetesPodV1SpecVolumeVsphereVolumeToTerraform(struct?: DataKubernetesPodV1SpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolumeVsphereVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolumeVsphereVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}

export class DataKubernetesPodV1SpecVolumeVsphereVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeVsphereVolumeOutputReference {
    return new DataKubernetesPodV1SpecVolumeVsphereVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1SpecVolume {
}

export function dataKubernetesPodV1SpecVolumeToTerraform(struct?: DataKubernetesPodV1SpecVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1SpecVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1SpecVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_elastic_block_store - computed: true, optional: false, required: false
  private _awsElasticBlockStore = new DataKubernetesPodV1SpecVolumeAwsElasticBlockStoreList(this, "aws_elastic_block_store", false);
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }

  // azure_disk - computed: true, optional: false, required: false
  private _azureDisk = new DataKubernetesPodV1SpecVolumeAzureDiskList(this, "azure_disk", false);
  public get azureDisk() {
    return this._azureDisk;
  }

  // azure_file - computed: true, optional: false, required: false
  private _azureFile = new DataKubernetesPodV1SpecVolumeAzureFileList(this, "azure_file", false);
  public get azureFile() {
    return this._azureFile;
  }

  // ceph_fs - computed: true, optional: false, required: false
  private _cephFs = new DataKubernetesPodV1SpecVolumeCephFsList(this, "ceph_fs", false);
  public get cephFs() {
    return this._cephFs;
  }

  // cinder - computed: true, optional: false, required: false
  private _cinder = new DataKubernetesPodV1SpecVolumeCinderList(this, "cinder", false);
  public get cinder() {
    return this._cinder;
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataKubernetesPodV1SpecVolumeConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // csi - computed: true, optional: false, required: false
  private _csi = new DataKubernetesPodV1SpecVolumeCsiList(this, "csi", false);
  public get csi() {
    return this._csi;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataKubernetesPodV1SpecVolumeDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataKubernetesPodV1SpecVolumeEmptyDirList(this, "empty_dir", false);
  public get emptyDir() {
    return this._emptyDir;
  }

  // ephemeral - computed: true, optional: false, required: false
  private _ephemeral = new DataKubernetesPodV1SpecVolumeEphemeralList(this, "ephemeral", false);
  public get ephemeral() {
    return this._ephemeral;
  }

  // fc - computed: true, optional: false, required: false
  private _fc = new DataKubernetesPodV1SpecVolumeFcList(this, "fc", false);
  public get fc() {
    return this._fc;
  }

  // flex_volume - computed: true, optional: false, required: false
  private _flexVolume = new DataKubernetesPodV1SpecVolumeFlexVolumeList(this, "flex_volume", false);
  public get flexVolume() {
    return this._flexVolume;
  }

  // flocker - computed: true, optional: false, required: false
  private _flocker = new DataKubernetesPodV1SpecVolumeFlockerList(this, "flocker", false);
  public get flocker() {
    return this._flocker;
  }

  // gce_persistent_disk - computed: true, optional: false, required: false
  private _gcePersistentDisk = new DataKubernetesPodV1SpecVolumeGcePersistentDiskList(this, "gce_persistent_disk", false);
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }

  // git_repo - computed: true, optional: false, required: false
  private _gitRepo = new DataKubernetesPodV1SpecVolumeGitRepoList(this, "git_repo", false);
  public get gitRepo() {
    return this._gitRepo;
  }

  // glusterfs - computed: true, optional: false, required: false
  private _glusterfs = new DataKubernetesPodV1SpecVolumeGlusterfsList(this, "glusterfs", false);
  public get glusterfs() {
    return this._glusterfs;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataKubernetesPodV1SpecVolumeHostPathList(this, "host_path", false);
  public get hostPath() {
    return this._hostPath;
  }

  // iscsi - computed: true, optional: false, required: false
  private _iscsi = new DataKubernetesPodV1SpecVolumeIscsiList(this, "iscsi", false);
  public get iscsi() {
    return this._iscsi;
  }

  // local - computed: true, optional: false, required: false
  private _local = new DataKubernetesPodV1SpecVolumeLocalList(this, "local", false);
  public get local() {
    return this._local;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: false
  private _nfs = new DataKubernetesPodV1SpecVolumeNfsList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  private _persistentVolumeClaim = new DataKubernetesPodV1SpecVolumePersistentVolumeClaimList(this, "persistent_volume_claim", false);
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }

  // photon_persistent_disk - computed: true, optional: false, required: false
  private _photonPersistentDisk = new DataKubernetesPodV1SpecVolumePhotonPersistentDiskList(this, "photon_persistent_disk", false);
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }

  // projected - computed: true, optional: false, required: false
  private _projected = new DataKubernetesPodV1SpecVolumeProjectedList(this, "projected", false);
  public get projected() {
    return this._projected;
  }

  // quobyte - computed: true, optional: false, required: false
  private _quobyte = new DataKubernetesPodV1SpecVolumeQuobyteList(this, "quobyte", false);
  public get quobyte() {
    return this._quobyte;
  }

  // rbd - computed: true, optional: false, required: false
  private _rbd = new DataKubernetesPodV1SpecVolumeRbdList(this, "rbd", false);
  public get rbd() {
    return this._rbd;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataKubernetesPodV1SpecVolumeSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // vsphere_volume - computed: true, optional: false, required: false
  private _vsphereVolume = new DataKubernetesPodV1SpecVolumeVsphereVolumeList(this, "vsphere_volume", false);
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
}

export class DataKubernetesPodV1SpecVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecVolumeOutputReference {
    return new DataKubernetesPodV1SpecVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1Spec {
}

export function dataKubernetesPodV1SpecToTerraform(struct?: DataKubernetesPodV1Spec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodV1Spec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1Spec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: false
  private _affinity = new DataKubernetesPodV1SpecAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataKubernetesPodV1SpecContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataKubernetesPodV1SpecDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: false
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: false
  private _hostAliases = new DataKubernetesPodV1SpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }

  // host_ipc - computed: true, optional: false, required: false
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: false
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataKubernetesPodV1SpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_container - computed: true, optional: false, required: false
  private _initContainer = new DataKubernetesPodV1SpecInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // os - computed: true, optional: false, required: false
  private _os = new DataKubernetesPodV1SpecOsList(this, "os", false);
  public get os() {
    return this._os;
  }

  // priority_class_name - computed: true, optional: false, required: false
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: false
  private _readinessGate = new DataKubernetesPodV1SpecReadinessGateList(this, "readiness_gate", false);
  public get readinessGate() {
    return this._readinessGate;
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // runtime_class_name - computed: true, optional: false, required: false
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }

  // scheduler_name - computed: true, optional: false, required: false
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataKubernetesPodV1SpecSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: false
  private _toleration = new DataKubernetesPodV1SpecTolerationList(this, "toleration", false);
  public get toleration() {
    return this._toleration;
  }

  // topology_spread_constraint - computed: true, optional: false, required: false
  private _topologySpreadConstraint = new DataKubernetesPodV1SpecTopologySpreadConstraintList(this, "topology_spread_constraint", false);
  public get topologySpreadConstraint() {
    return this._topologySpreadConstraint;
  }

  // volume - computed: true, optional: false, required: false
  private _volume = new DataKubernetesPodV1SpecVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
}

export class DataKubernetesPodV1SpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodV1SpecOutputReference {
    return new DataKubernetesPodV1SpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodV1Metadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/pod_v1#annotations DataKubernetesPodV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/pod_v1#generate_name DataKubernetesPodV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/pod_v1#labels DataKubernetesPodV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/pod_v1#name DataKubernetesPodV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/pod_v1#namespace DataKubernetesPodV1#namespace}
  */
  readonly namespace?: string;
}

export function dataKubernetesPodV1MetadataToTerraform(struct?: DataKubernetesPodV1MetadataOutputReference | DataKubernetesPodV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesPodV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKubernetesPodV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
