// https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodSecurityPolicyV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#metadata PodSecurityPolicyV1Beta1#metadata}
  */
  readonly metadata: PodSecurityPolicyV1Beta1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#spec PodSecurityPolicyV1Beta1#spec}
  */
  readonly spec: PodSecurityPolicyV1Beta1Spec;
}
export interface PodSecurityPolicyV1Beta1Metadata {
  /**
  * An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#annotations PodSecurityPolicyV1Beta1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#labels PodSecurityPolicyV1Beta1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#name PodSecurityPolicyV1Beta1#name}
  */
  readonly name?: string;
}

function podSecurityPolicyV1Beta1MetadataToTerraform(struct?: PodSecurityPolicyV1Beta1MetadataOutputReference | PodSecurityPolicyV1Beta1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class PodSecurityPolicyV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes {
  /**
  * driver is the name of the Flexvolume driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#driver PodSecurityPolicyV1Beta1#driver}
  */
  readonly driver: string;
}

function podSecurityPolicyV1Beta1SpecAllowedFlexVolumesToTerraform(struct?: PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
  }
}

export interface PodSecurityPolicyV1Beta1SpecAllowedHostPaths {
  /**
  * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#path_prefix PodSecurityPolicyV1Beta1#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#read_only PodSecurityPolicyV1Beta1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function podSecurityPolicyV1Beta1SpecAllowedHostPathsToTerraform(struct?: PodSecurityPolicyV1Beta1SpecAllowedHostPaths): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PodSecurityPolicyV1Beta1SpecFsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#max PodSecurityPolicyV1Beta1#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#min PodSecurityPolicyV1Beta1#min}
  */
  readonly min: number;
}

function podSecurityPolicyV1Beta1SpecFsGroupRangeToTerraform(struct?: PodSecurityPolicyV1Beta1SpecFsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicyV1Beta1SpecFsGroup {
  /**
  * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#rule PodSecurityPolicyV1Beta1#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#range PodSecurityPolicyV1Beta1#range}
  */
  readonly range?: PodSecurityPolicyV1Beta1SpecFsGroupRange[];
}

function podSecurityPolicyV1Beta1SpecFsGroupToTerraform(struct?: PodSecurityPolicyV1Beta1SpecFsGroupOutputReference | PodSecurityPolicyV1Beta1SpecFsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicyV1Beta1SpecFsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicyV1Beta1SpecFsGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicyV1Beta1SpecFsGroupRange[] | undefined; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicyV1Beta1SpecFsGroupRange[] | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface PodSecurityPolicyV1Beta1SpecHostPorts {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#max PodSecurityPolicyV1Beta1#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#min PodSecurityPolicyV1Beta1#min}
  */
  readonly min: number;
}

function podSecurityPolicyV1Beta1SpecHostPortsToTerraform(struct?: PodSecurityPolicyV1Beta1SpecHostPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicyV1Beta1SpecRunAsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#max PodSecurityPolicyV1Beta1#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#min PodSecurityPolicyV1Beta1#min}
  */
  readonly min: number;
}

function podSecurityPolicyV1Beta1SpecRunAsGroupRangeToTerraform(struct?: PodSecurityPolicyV1Beta1SpecRunAsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicyV1Beta1SpecRunAsGroup {
  /**
  * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#rule PodSecurityPolicyV1Beta1#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#range PodSecurityPolicyV1Beta1#range}
  */
  readonly range?: PodSecurityPolicyV1Beta1SpecRunAsGroupRange[];
}

function podSecurityPolicyV1Beta1SpecRunAsGroupToTerraform(struct?: PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference | PodSecurityPolicyV1Beta1SpecRunAsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicyV1Beta1SpecRunAsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicyV1Beta1SpecRunAsGroupRange[] | undefined; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicyV1Beta1SpecRunAsGroupRange[] | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface PodSecurityPolicyV1Beta1SpecRunAsUserRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#max PodSecurityPolicyV1Beta1#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#min PodSecurityPolicyV1Beta1#min}
  */
  readonly min: number;
}

function podSecurityPolicyV1Beta1SpecRunAsUserRangeToTerraform(struct?: PodSecurityPolicyV1Beta1SpecRunAsUserRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicyV1Beta1SpecRunAsUser {
  /**
  * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#rule PodSecurityPolicyV1Beta1#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#range PodSecurityPolicyV1Beta1#range}
  */
  readonly range?: PodSecurityPolicyV1Beta1SpecRunAsUserRange[];
}

function podSecurityPolicyV1Beta1SpecRunAsUserToTerraform(struct?: PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference | PodSecurityPolicyV1Beta1SpecRunAsUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicyV1Beta1SpecRunAsUserRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicyV1Beta1SpecRunAsUserRange[] | undefined; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicyV1Beta1SpecRunAsUserRange[] | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#level PodSecurityPolicyV1Beta1#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#role PodSecurityPolicyV1Beta1#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#type PodSecurityPolicyV1Beta1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#user PodSecurityPolicyV1Beta1#user}
  */
  readonly user: string;
}

function podSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsToTerraform(struct?: PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface PodSecurityPolicyV1Beta1SpecSeLinux {
  /**
  * rule is the strategy that will dictate the allowable labels that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#rule PodSecurityPolicyV1Beta1#rule}
  */
  readonly rule: string;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#se_linux_options PodSecurityPolicyV1Beta1#se_linux_options}
  */
  readonly seLinuxOptions?: PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions[];
}

function podSecurityPolicyV1Beta1SpecSeLinuxToTerraform(struct?: PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference | PodSecurityPolicyV1Beta1SpecSeLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    se_linux_options: cdktf.listMapper(podSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export class PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions?: PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions[] | undefined; 
  public get seLinuxOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('se_linux_options') as any;
  }
  public set seLinuxOptions(value: PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions[] | undefined) {
    this._seLinuxOptions = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions
  }
}
export interface PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#max PodSecurityPolicyV1Beta1#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#min PodSecurityPolicyV1Beta1#min}
  */
  readonly min: number;
}

function podSecurityPolicyV1Beta1SpecSupplementalGroupsRangeToTerraform(struct?: PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicyV1Beta1SpecSupplementalGroups {
  /**
  * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#rule PodSecurityPolicyV1Beta1#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#range PodSecurityPolicyV1Beta1#range}
  */
  readonly range?: PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange[];
}

function podSecurityPolicyV1Beta1SpecSupplementalGroupsToTerraform(struct?: PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference | PodSecurityPolicyV1Beta1SpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicyV1Beta1SpecSupplementalGroupsRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange[] | undefined; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange[] | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface PodSecurityPolicyV1Beta1Spec {
  /**
  * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allow_privilege_escalation PodSecurityPolicyV1Beta1#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allowed_capabilities PodSecurityPolicyV1Beta1#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
  /**
  * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allowed_proc_mount_types PodSecurityPolicyV1Beta1#allowed_proc_mount_types}
  */
  readonly allowedProcMountTypes?: string[];
  /**
  * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allowed_unsafe_sysctls PodSecurityPolicyV1Beta1#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#default_add_capabilities PodSecurityPolicyV1Beta1#default_add_capabilities}
  */
  readonly defaultAddCapabilities?: string[];
  /**
  * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#default_allow_privilege_escalation PodSecurityPolicyV1Beta1#default_allow_privilege_escalation}
  */
  readonly defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#forbidden_sysctls PodSecurityPolicyV1Beta1#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
  /**
  * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#host_ipc PodSecurityPolicyV1Beta1#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#host_network PodSecurityPolicyV1Beta1#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * hostPID determines if the policy allows the use of HostPID in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#host_pid PodSecurityPolicyV1Beta1#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * privileged determines if a pod can request to be run as privileged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#privileged PodSecurityPolicyV1Beta1#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#read_only_root_filesystem PodSecurityPolicyV1Beta1#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#required_drop_capabilities PodSecurityPolicyV1Beta1#required_drop_capabilities}
  */
  readonly requiredDropCapabilities?: string[];
  /**
  * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#volumes PodSecurityPolicyV1Beta1#volumes}
  */
  readonly volumes?: string[];
  /**
  * allowed_flex_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allowed_flex_volumes PodSecurityPolicyV1Beta1#allowed_flex_volumes}
  */
  readonly allowedFlexVolumes?: PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes[];
  /**
  * allowed_host_paths block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#allowed_host_paths PodSecurityPolicyV1Beta1#allowed_host_paths}
  */
  readonly allowedHostPaths?: PodSecurityPolicyV1Beta1SpecAllowedHostPaths[];
  /**
  * fs_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#fs_group PodSecurityPolicyV1Beta1#fs_group}
  */
  readonly fsGroup: PodSecurityPolicyV1Beta1SpecFsGroup;
  /**
  * host_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#host_ports PodSecurityPolicyV1Beta1#host_ports}
  */
  readonly hostPorts?: PodSecurityPolicyV1Beta1SpecHostPorts[];
  /**
  * run_as_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#run_as_group PodSecurityPolicyV1Beta1#run_as_group}
  */
  readonly runAsGroup?: PodSecurityPolicyV1Beta1SpecRunAsGroup;
  /**
  * run_as_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#run_as_user PodSecurityPolicyV1Beta1#run_as_user}
  */
  readonly runAsUser: PodSecurityPolicyV1Beta1SpecRunAsUser;
  /**
  * se_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#se_linux PodSecurityPolicyV1Beta1#se_linux}
  */
  readonly seLinux?: PodSecurityPolicyV1Beta1SpecSeLinux;
  /**
  * supplemental_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html#supplemental_groups PodSecurityPolicyV1Beta1#supplemental_groups}
  */
  readonly supplementalGroups: PodSecurityPolicyV1Beta1SpecSupplementalGroups;
}

function podSecurityPolicyV1Beta1SpecToTerraform(struct?: PodSecurityPolicyV1Beta1SpecOutputReference | PodSecurityPolicyV1Beta1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    allowed_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCapabilities),
    allowed_proc_mount_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedProcMountTypes),
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedUnsafeSysctls),
    default_add_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.defaultAddCapabilities),
    default_allow_privilege_escalation: cdktf.booleanToTerraform(struct!.defaultAllowPrivilegeEscalation),
    forbidden_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.forbiddenSysctls),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    required_drop_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requiredDropCapabilities),
    volumes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.volumes),
    allowed_flex_volumes: cdktf.listMapper(podSecurityPolicyV1Beta1SpecAllowedFlexVolumesToTerraform)(struct!.allowedFlexVolumes),
    allowed_host_paths: cdktf.listMapper(podSecurityPolicyV1Beta1SpecAllowedHostPathsToTerraform)(struct!.allowedHostPaths),
    fs_group: podSecurityPolicyV1Beta1SpecFsGroupToTerraform(struct!.fsGroup),
    host_ports: cdktf.listMapper(podSecurityPolicyV1Beta1SpecHostPortsToTerraform)(struct!.hostPorts),
    run_as_group: podSecurityPolicyV1Beta1SpecRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_user: podSecurityPolicyV1Beta1SpecRunAsUserToTerraform(struct!.runAsUser),
    se_linux: podSecurityPolicyV1Beta1SpecSeLinuxToTerraform(struct!.seLinux),
    supplemental_groups: podSecurityPolicyV1Beta1SpecSupplementalGroupsToTerraform(struct!.supplementalGroups),
  }
}

export class PodSecurityPolicyV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_privilege_escalation - computed: true, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable | undefined; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation') as any;
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable | undefined) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation
  }

  // allowed_capabilities - computed: true, optional: true, required: false
  private _allowedCapabilities?: string[] | undefined; 
  public get allowedCapabilities() {
    return this.getListAttribute('allowed_capabilities');
  }
  public set allowedCapabilities(value: string[] | undefined) {
    this._allowedCapabilities = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities
  }

  // allowed_proc_mount_types - computed: false, optional: true, required: false
  private _allowedProcMountTypes?: string[] | undefined; 
  public get allowedProcMountTypes() {
    return this.getListAttribute('allowed_proc_mount_types');
  }
  public set allowedProcMountTypes(value: string[] | undefined) {
    this._allowedProcMountTypes = value;
  }
  public resetAllowedProcMountTypes() {
    this._allowedProcMountTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcMountTypesInput() {
    return this._allowedProcMountTypes
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[] | undefined; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[] | undefined) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls
  }

  // default_add_capabilities - computed: false, optional: true, required: false
  private _defaultAddCapabilities?: string[] | undefined; 
  public get defaultAddCapabilities() {
    return this.getListAttribute('default_add_capabilities');
  }
  public set defaultAddCapabilities(value: string[] | undefined) {
    this._defaultAddCapabilities = value;
  }
  public resetDefaultAddCapabilities() {
    this._defaultAddCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddCapabilitiesInput() {
    return this._defaultAddCapabilities
  }

  // default_allow_privilege_escalation - computed: true, optional: true, required: false
  private _defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable | undefined; 
  public get defaultAllowPrivilegeEscalation() {
    return this.getBooleanAttribute('default_allow_privilege_escalation') as any;
  }
  public set defaultAllowPrivilegeEscalation(value: boolean | cdktf.IResolvable | undefined) {
    this._defaultAllowPrivilegeEscalation = value;
  }
  public resetDefaultAllowPrivilegeEscalation() {
    this._defaultAllowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowPrivilegeEscalationInput() {
    return this._defaultAllowPrivilegeEscalation
  }

  // forbidden_sysctls - computed: false, optional: true, required: false
  private _forbiddenSysctls?: string[] | undefined; 
  public get forbiddenSysctls() {
    return this.getListAttribute('forbidden_sysctls');
  }
  public set forbiddenSysctls(value: string[] | undefined) {
    this._forbiddenSysctls = value;
  }
  public resetForbiddenSysctls() {
    this._forbiddenSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenSysctlsInput() {
    return this._forbiddenSysctls
  }

  // host_ipc - computed: true, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable | undefined; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc') as any;
  }
  public set hostIpc(value: boolean | cdktf.IResolvable | undefined) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc
  }

  // host_network - computed: true, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable | undefined; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network') as any;
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable | undefined) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork
  }

  // host_pid - computed: true, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable | undefined; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid') as any;
  }
  public set hostPid(value: boolean | cdktf.IResolvable | undefined) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable | undefined; 
  public get privileged() {
    return this.getBooleanAttribute('privileged') as any;
  }
  public set privileged(value: boolean | cdktf.IResolvable | undefined) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged
  }

  // read_only_root_filesystem - computed: true, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable | undefined; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem') as any;
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem
  }

  // required_drop_capabilities - computed: true, optional: true, required: false
  private _requiredDropCapabilities?: string[] | undefined; 
  public get requiredDropCapabilities() {
    return this.getListAttribute('required_drop_capabilities');
  }
  public set requiredDropCapabilities(value: string[] | undefined) {
    this._requiredDropCapabilities = value;
  }
  public resetRequiredDropCapabilities() {
    this._requiredDropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDropCapabilitiesInput() {
    return this._requiredDropCapabilities
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes?: string[] | undefined; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[] | undefined) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes
  }

  // allowed_flex_volumes - computed: false, optional: true, required: false
  private _allowedFlexVolumes?: PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes[] | undefined; 
  public get allowedFlexVolumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_flex_volumes') as any;
  }
  public set allowedFlexVolumes(value: PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes[] | undefined) {
    this._allowedFlexVolumes = value;
  }
  public resetAllowedFlexVolumes() {
    this._allowedFlexVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFlexVolumesInput() {
    return this._allowedFlexVolumes
  }

  // allowed_host_paths - computed: false, optional: true, required: false
  private _allowedHostPaths?: PodSecurityPolicyV1Beta1SpecAllowedHostPaths[] | undefined; 
  public get allowedHostPaths() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_host_paths') as any;
  }
  public set allowedHostPaths(value: PodSecurityPolicyV1Beta1SpecAllowedHostPaths[] | undefined) {
    this._allowedHostPaths = value;
  }
  public resetAllowedHostPaths() {
    this._allowedHostPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPathsInput() {
    return this._allowedHostPaths
  }

  // fs_group - computed: false, optional: false, required: true
  private _fsGroup?: PodSecurityPolicyV1Beta1SpecFsGroup; 
  private __fsGroupOutput = new PodSecurityPolicyV1Beta1SpecFsGroupOutputReference(this as any, "fs_group", true);
  public get fsGroup() {
    return this.__fsGroupOutput;
  }
  public putFsGroup(value: PodSecurityPolicyV1Beta1SpecFsGroup) {
    this._fsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup
  }

  // host_ports - computed: false, optional: true, required: false
  private _hostPorts?: PodSecurityPolicyV1Beta1SpecHostPorts[] | undefined; 
  public get hostPorts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_ports') as any;
  }
  public set hostPorts(value: PodSecurityPolicyV1Beta1SpecHostPorts[] | undefined) {
    this._hostPorts = value;
  }
  public resetHostPorts() {
    this._hostPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortsInput() {
    return this._hostPorts
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: PodSecurityPolicyV1Beta1SpecRunAsGroup | undefined; 
  private __runAsGroupOutput = new PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference(this as any, "run_as_group", true);
  public get runAsGroup() {
    return this.__runAsGroupOutput;
  }
  public putRunAsGroup(value: PodSecurityPolicyV1Beta1SpecRunAsGroup | undefined) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup
  }

  // run_as_user - computed: false, optional: false, required: true
  private _runAsUser?: PodSecurityPolicyV1Beta1SpecRunAsUser; 
  private __runAsUserOutput = new PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference(this as any, "run_as_user", true);
  public get runAsUser() {
    return this.__runAsUserOutput;
  }
  public putRunAsUser(value: PodSecurityPolicyV1Beta1SpecRunAsUser) {
    this._runAsUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser
  }

  // se_linux - computed: false, optional: true, required: false
  private _seLinux?: PodSecurityPolicyV1Beta1SpecSeLinux | undefined; 
  private __seLinuxOutput = new PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference(this as any, "se_linux", true);
  public get seLinux() {
    return this.__seLinuxOutput;
  }
  public putSeLinux(value: PodSecurityPolicyV1Beta1SpecSeLinux | undefined) {
    this._seLinux = value;
  }
  public resetSeLinux() {
    this._seLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxInput() {
    return this._seLinux
  }

  // supplemental_groups - computed: false, optional: false, required: true
  private _supplementalGroups?: PodSecurityPolicyV1Beta1SpecSupplementalGroups; 
  private __supplementalGroupsOutput = new PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference(this as any, "supplemental_groups", true);
  public get supplementalGroups() {
    return this.__supplementalGroupsOutput;
  }
  public putSupplementalGroups(value: PodSecurityPolicyV1Beta1SpecSupplementalGroups) {
    this._supplementalGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html kubernetes_pod_security_policy_v1beta1}
*/
export class PodSecurityPolicyV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_pod_security_policy_v1beta1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy_v1beta1.html kubernetes_pod_security_policy_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodSecurityPolicyV1Beta1Config
  */
  public constructor(scope: Construct, id: string, config: PodSecurityPolicyV1Beta1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_security_policy_v1beta1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: PodSecurityPolicyV1Beta1Metadata; 
  private __metadataOutput = new PodSecurityPolicyV1Beta1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: PodSecurityPolicyV1Beta1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: PodSecurityPolicyV1Beta1Spec; 
  private __specOutput = new PodSecurityPolicyV1Beta1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: PodSecurityPolicyV1Beta1Spec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: podSecurityPolicyV1Beta1MetadataToTerraform(this._metadata),
      spec: podSecurityPolicyV1Beta1SpecToTerraform(this._spec),
    };
  }
}
