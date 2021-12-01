// https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#metadata PodSecurityPolicy#metadata}
  */
  readonly metadata: PodSecurityPolicyMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#spec PodSecurityPolicy#spec}
  */
  readonly spec: PodSecurityPolicySpec;
}
export interface PodSecurityPolicyMetadata {
  /**
  * An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#annotations PodSecurityPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#labels PodSecurityPolicy#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#name PodSecurityPolicy#name}
  */
  readonly name?: string;
}

export function podSecurityPolicyMetadataToTerraform(struct?: PodSecurityPolicyMetadataOutputReference | PodSecurityPolicyMetadata): any {
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

export class PodSecurityPolicyMetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicyMetadata | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicyMetadata | undefined) {
    if (value === undefined) {
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
}
export interface PodSecurityPolicySpecAllowedFlexVolumes {
  /**
  * driver is the name of the Flexvolume driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#driver PodSecurityPolicy#driver}
  */
  readonly driver: string;
}

export function podSecurityPolicySpecAllowedFlexVolumesToTerraform(struct?: PodSecurityPolicySpecAllowedFlexVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
  }
}

export interface PodSecurityPolicySpecAllowedHostPaths {
  /**
  * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#path_prefix PodSecurityPolicy#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#read_only PodSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function podSecurityPolicySpecAllowedHostPathsToTerraform(struct?: PodSecurityPolicySpecAllowedHostPaths): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PodSecurityPolicySpecFsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecFsGroupRangeToTerraform(struct?: PodSecurityPolicySpecFsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecFsGroup {
  /**
  * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecFsGroupRange[];
}

export function podSecurityPolicySpecFsGroupToTerraform(struct?: PodSecurityPolicySpecFsGroupOutputReference | PodSecurityPolicySpecFsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecFsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecFsGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpecFsGroup | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecFsGroup | undefined) {
    if (value === undefined) {
      this._rule = undefined;
      this._range = undefined;
    }
    else {
      this._rule = value.rule;
      this._range = value.range;
    }
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
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicySpecFsGroupRange[]; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicySpecFsGroupRange[]) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}
export interface PodSecurityPolicySpecHostPorts {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecHostPortsToTerraform(struct?: PodSecurityPolicySpecHostPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecRunAsGroupRangeToTerraform(struct?: PodSecurityPolicySpecRunAsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsGroup {
  /**
  * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsGroupRange[];
}

export function podSecurityPolicySpecRunAsGroupToTerraform(struct?: PodSecurityPolicySpecRunAsGroupOutputReference | PodSecurityPolicySpecRunAsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecRunAsGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsGroup | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsGroup | undefined) {
    if (value === undefined) {
      this._rule = undefined;
      this._range = undefined;
    }
    else {
      this._rule = value.rule;
      this._range = value.range;
    }
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
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicySpecRunAsGroupRange[]; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicySpecRunAsGroupRange[]) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}
export interface PodSecurityPolicySpecRunAsUserRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecRunAsUserRangeToTerraform(struct?: PodSecurityPolicySpecRunAsUserRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsUser {
  /**
  * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsUserRange[];
}

export function podSecurityPolicySpecRunAsUserToTerraform(struct?: PodSecurityPolicySpecRunAsUserOutputReference | PodSecurityPolicySpecRunAsUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsUserRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecRunAsUserOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsUser | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsUser | undefined) {
    if (value === undefined) {
      this._rule = undefined;
      this._range = undefined;
    }
    else {
      this._rule = value.rule;
      this._range = value.range;
    }
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
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicySpecRunAsUserRange[]; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicySpecRunAsUserRange[]) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}
export interface PodSecurityPolicySpecSeLinuxSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#level PodSecurityPolicy#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#role PodSecurityPolicy#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#type PodSecurityPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#user PodSecurityPolicy#user}
  */
  readonly user: string;
}

export function podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform(struct?: PodSecurityPolicySpecSeLinuxSeLinuxOptions): any {
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

export interface PodSecurityPolicySpecSeLinux {
  /**
  * rule is the strategy that will dictate the allowable labels that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#se_linux_options PodSecurityPolicy#se_linux_options}
  */
  readonly seLinuxOptions?: PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
}

export function podSecurityPolicySpecSeLinuxToTerraform(struct?: PodSecurityPolicySpecSeLinuxOutputReference | PodSecurityPolicySpecSeLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    se_linux_options: cdktf.listMapper(podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export class PodSecurityPolicySpecSeLinuxOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpecSeLinux | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._seLinuxOptions) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSeLinux | undefined) {
    if (value === undefined) {
      this._rule = undefined;
      this._seLinuxOptions = undefined;
    }
    else {
      this._rule = value.rule;
      this._seLinuxOptions = value.seLinuxOptions;
    }
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
    return this._rule;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions?: PodSecurityPolicySpecSeLinuxSeLinuxOptions[]; 
  public get seLinuxOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('se_linux_options') as any;
  }
  public set seLinuxOptions(value: PodSecurityPolicySpecSeLinuxSeLinuxOptions[]) {
    this._seLinuxOptions = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions;
  }
}
export interface PodSecurityPolicySpecSupplementalGroupsRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecSupplementalGroupsRangeToTerraform(struct?: PodSecurityPolicySpecSupplementalGroupsRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecSupplementalGroups {
  /**
  * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecSupplementalGroupsRange[];
}

export function podSecurityPolicySpecSupplementalGroupsToTerraform(struct?: PodSecurityPolicySpecSupplementalGroupsOutputReference | PodSecurityPolicySpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecSupplementalGroupsRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecSupplementalGroupsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpecSupplementalGroups | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSupplementalGroups | undefined) {
    if (value === undefined) {
      this._rule = undefined;
      this._range = undefined;
    }
    else {
      this._rule = value.rule;
      this._range = value.range;
    }
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
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range?: PodSecurityPolicySpecSupplementalGroupsRange[]; 
  public get range() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range') as any;
  }
  public set range(value: PodSecurityPolicySpecSupplementalGroupsRange[]) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}
export interface PodSecurityPolicySpec {
  /**
  * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_capabilities PodSecurityPolicy#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
  /**
  * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}
  */
  readonly allowedProcMountTypes?: string[];
  /**
  * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#default_add_capabilities PodSecurityPolicy#default_add_capabilities}
  */
  readonly defaultAddCapabilities?: string[];
  /**
  * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}
  */
  readonly defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
  /**
  * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_ipc PodSecurityPolicy#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_network PodSecurityPolicy#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * hostPID determines if the policy allows the use of HostPID in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_pid PodSecurityPolicy#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * privileged determines if a pod can request to be run as privileged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#privileged PodSecurityPolicy#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}
  */
  readonly requiredDropCapabilities?: string[];
  /**
  * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#volumes PodSecurityPolicy#volumes}
  */
  readonly volumes?: string[];
  /**
  * allowed_flex_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}
  */
  readonly allowedFlexVolumes?: PodSecurityPolicySpecAllowedFlexVolumes[];
  /**
  * allowed_host_paths block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_host_paths PodSecurityPolicy#allowed_host_paths}
  */
  readonly allowedHostPaths?: PodSecurityPolicySpecAllowedHostPaths[];
  /**
  * fs_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#fs_group PodSecurityPolicy#fs_group}
  */
  readonly fsGroup: PodSecurityPolicySpecFsGroup;
  /**
  * host_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_ports PodSecurityPolicy#host_ports}
  */
  readonly hostPorts?: PodSecurityPolicySpecHostPorts[];
  /**
  * run_as_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#run_as_group PodSecurityPolicy#run_as_group}
  */
  readonly runAsGroup?: PodSecurityPolicySpecRunAsGroup;
  /**
  * run_as_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#run_as_user PodSecurityPolicy#run_as_user}
  */
  readonly runAsUser: PodSecurityPolicySpecRunAsUser;
  /**
  * se_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#se_linux PodSecurityPolicy#se_linux}
  */
  readonly seLinux?: PodSecurityPolicySpecSeLinux;
  /**
  * supplemental_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#supplemental_groups PodSecurityPolicy#supplemental_groups}
  */
  readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroups;
}

export function podSecurityPolicySpecToTerraform(struct?: PodSecurityPolicySpecOutputReference | PodSecurityPolicySpec): any {
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
    allowed_flex_volumes: cdktf.listMapper(podSecurityPolicySpecAllowedFlexVolumesToTerraform)(struct!.allowedFlexVolumes),
    allowed_host_paths: cdktf.listMapper(podSecurityPolicySpecAllowedHostPathsToTerraform)(struct!.allowedHostPaths),
    fs_group: podSecurityPolicySpecFsGroupToTerraform(struct!.fsGroup),
    host_ports: cdktf.listMapper(podSecurityPolicySpecHostPortsToTerraform)(struct!.hostPorts),
    run_as_group: podSecurityPolicySpecRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_user: podSecurityPolicySpecRunAsUserToTerraform(struct!.runAsUser),
    se_linux: podSecurityPolicySpecSeLinuxToTerraform(struct!.seLinux),
    supplemental_groups: podSecurityPolicySpecSupplementalGroupsToTerraform(struct!.supplementalGroups),
  }
}

export class PodSecurityPolicySpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PodSecurityPolicySpec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._allowedCapabilities) {
      hasAnyValues = true;
      internalValueResult.allowedCapabilities = this._allowedCapabilities;
    }
    if (this._allowedProcMountTypes) {
      hasAnyValues = true;
      internalValueResult.allowedProcMountTypes = this._allowedProcMountTypes;
    }
    if (this._allowedUnsafeSysctls) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._defaultAddCapabilities) {
      hasAnyValues = true;
      internalValueResult.defaultAddCapabilities = this._defaultAddCapabilities;
    }
    if (this._defaultAllowPrivilegeEscalation) {
      hasAnyValues = true;
      internalValueResult.defaultAllowPrivilegeEscalation = this._defaultAllowPrivilegeEscalation;
    }
    if (this._forbiddenSysctls) {
      hasAnyValues = true;
      internalValueResult.forbiddenSysctls = this._forbiddenSysctls;
    }
    if (this._hostIpc) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._privileged) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._requiredDropCapabilities) {
      hasAnyValues = true;
      internalValueResult.requiredDropCapabilities = this._requiredDropCapabilities;
    }
    if (this._volumes) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._allowedFlexVolumes) {
      hasAnyValues = true;
      internalValueResult.allowedFlexVolumes = this._allowedFlexVolumes;
    }
    if (this._allowedHostPaths) {
      hasAnyValues = true;
      internalValueResult.allowedHostPaths = this._allowedHostPaths;
    }
    if (this._fsGroup) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup?.internalValue;
    }
    if (this._hostPorts) {
      hasAnyValues = true;
      internalValueResult.hostPorts = this._hostPorts;
    }
    if (this._runAsGroup) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup?.internalValue;
    }
    if (this._runAsUser) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser?.internalValue;
    }
    if (this._seLinux) {
      hasAnyValues = true;
      internalValueResult.seLinux = this._seLinux?.internalValue;
    }
    if (this._supplementalGroups) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpec | undefined) {
    if (value === undefined) {
      this._allowPrivilegeEscalation = undefined;
      this._allowedCapabilities = undefined;
      this._allowedProcMountTypes = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._defaultAddCapabilities = undefined;
      this._defaultAllowPrivilegeEscalation = undefined;
      this._forbiddenSysctls = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._requiredDropCapabilities = undefined;
      this._volumes = undefined;
      this._allowedFlexVolumes = undefined;
      this._allowedHostPaths = undefined;
      this._fsGroup.internalValue = undefined;
      this._hostPorts = undefined;
      this._runAsGroup.internalValue = undefined;
      this._runAsUser.internalValue = undefined;
      this._seLinux.internalValue = undefined;
      this._supplementalGroups.internalValue = undefined;
    }
    else {
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._allowedCapabilities = value.allowedCapabilities;
      this._allowedProcMountTypes = value.allowedProcMountTypes;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._defaultAddCapabilities = value.defaultAddCapabilities;
      this._defaultAllowPrivilegeEscalation = value.defaultAllowPrivilegeEscalation;
      this._forbiddenSysctls = value.forbiddenSysctls;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._requiredDropCapabilities = value.requiredDropCapabilities;
      this._volumes = value.volumes;
      this._allowedFlexVolumes = value.allowedFlexVolumes;
      this._allowedHostPaths = value.allowedHostPaths;
      this._fsGroup.internalValue = value.fsGroup;
      this._hostPorts = value.hostPorts;
      this._runAsGroup.internalValue = value.runAsGroup;
      this._runAsUser.internalValue = value.runAsUser;
      this._seLinux.internalValue = value.seLinux;
      this._supplementalGroups.internalValue = value.supplementalGroups;
    }
  }

  // allow_privilege_escalation - computed: true, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation') as any;
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // allowed_capabilities - computed: true, optional: true, required: false
  private _allowedCapabilities?: string[]; 
  public get allowedCapabilities() {
    return this.getListAttribute('allowed_capabilities');
  }
  public set allowedCapabilities(value: string[]) {
    this._allowedCapabilities = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities;
  }

  // allowed_proc_mount_types - computed: false, optional: true, required: false
  private _allowedProcMountTypes?: string[]; 
  public get allowedProcMountTypes() {
    return this.getListAttribute('allowed_proc_mount_types');
  }
  public set allowedProcMountTypes(value: string[]) {
    this._allowedProcMountTypes = value;
  }
  public resetAllowedProcMountTypes() {
    this._allowedProcMountTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcMountTypesInput() {
    return this._allowedProcMountTypes;
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // default_add_capabilities - computed: false, optional: true, required: false
  private _defaultAddCapabilities?: string[]; 
  public get defaultAddCapabilities() {
    return this.getListAttribute('default_add_capabilities');
  }
  public set defaultAddCapabilities(value: string[]) {
    this._defaultAddCapabilities = value;
  }
  public resetDefaultAddCapabilities() {
    this._defaultAddCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddCapabilitiesInput() {
    return this._defaultAddCapabilities;
  }

  // default_allow_privilege_escalation - computed: true, optional: true, required: false
  private _defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get defaultAllowPrivilegeEscalation() {
    return this.getBooleanAttribute('default_allow_privilege_escalation') as any;
  }
  public set defaultAllowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._defaultAllowPrivilegeEscalation = value;
  }
  public resetDefaultAllowPrivilegeEscalation() {
    this._defaultAllowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowPrivilegeEscalationInput() {
    return this._defaultAllowPrivilegeEscalation;
  }

  // forbidden_sysctls - computed: false, optional: true, required: false
  private _forbiddenSysctls?: string[]; 
  public get forbiddenSysctls() {
    return this.getListAttribute('forbidden_sysctls');
  }
  public set forbiddenSysctls(value: string[]) {
    this._forbiddenSysctls = value;
  }
  public resetForbiddenSysctls() {
    this._forbiddenSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenSysctlsInput() {
    return this._forbiddenSysctls;
  }

  // host_ipc - computed: true, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc') as any;
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: true, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network') as any;
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: true, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid') as any;
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged') as any;
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: true, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem') as any;
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // required_drop_capabilities - computed: true, optional: true, required: false
  private _requiredDropCapabilities?: string[]; 
  public get requiredDropCapabilities() {
    return this.getListAttribute('required_drop_capabilities');
  }
  public set requiredDropCapabilities(value: string[]) {
    this._requiredDropCapabilities = value;
  }
  public resetRequiredDropCapabilities() {
    this._requiredDropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDropCapabilitiesInput() {
    return this._requiredDropCapabilities;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // allowed_flex_volumes - computed: false, optional: true, required: false
  private _allowedFlexVolumes?: PodSecurityPolicySpecAllowedFlexVolumes[]; 
  public get allowedFlexVolumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_flex_volumes') as any;
  }
  public set allowedFlexVolumes(value: PodSecurityPolicySpecAllowedFlexVolumes[]) {
    this._allowedFlexVolumes = value;
  }
  public resetAllowedFlexVolumes() {
    this._allowedFlexVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFlexVolumesInput() {
    return this._allowedFlexVolumes;
  }

  // allowed_host_paths - computed: false, optional: true, required: false
  private _allowedHostPaths?: PodSecurityPolicySpecAllowedHostPaths[]; 
  public get allowedHostPaths() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_host_paths') as any;
  }
  public set allowedHostPaths(value: PodSecurityPolicySpecAllowedHostPaths[]) {
    this._allowedHostPaths = value;
  }
  public resetAllowedHostPaths() {
    this._allowedHostPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPathsInput() {
    return this._allowedHostPaths;
  }

  // fs_group - computed: false, optional: false, required: true
  private _fsGroup = new PodSecurityPolicySpecFsGroupOutputReference(this as any, "fs_group", true);
  public get fsGroup() {
    return this._fsGroup;
  }
  public putFsGroup(value: PodSecurityPolicySpecFsGroup) {
    this._fsGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup.internalValue;
  }

  // host_ports - computed: false, optional: true, required: false
  private _hostPorts?: PodSecurityPolicySpecHostPorts[]; 
  public get hostPorts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_ports') as any;
  }
  public set hostPorts(value: PodSecurityPolicySpecHostPorts[]) {
    this._hostPorts = value;
  }
  public resetHostPorts() {
    this._hostPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortsInput() {
    return this._hostPorts;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup = new PodSecurityPolicySpecRunAsGroupOutputReference(this as any, "run_as_group", true);
  public get runAsGroup() {
    return this._runAsGroup;
  }
  public putRunAsGroup(value: PodSecurityPolicySpecRunAsGroup) {
    this._runAsGroup.internalValue = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup.internalValue;
  }

  // run_as_user - computed: false, optional: false, required: true
  private _runAsUser = new PodSecurityPolicySpecRunAsUserOutputReference(this as any, "run_as_user", true);
  public get runAsUser() {
    return this._runAsUser;
  }
  public putRunAsUser(value: PodSecurityPolicySpecRunAsUser) {
    this._runAsUser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser.internalValue;
  }

  // se_linux - computed: false, optional: true, required: false
  private _seLinux = new PodSecurityPolicySpecSeLinuxOutputReference(this as any, "se_linux", true);
  public get seLinux() {
    return this._seLinux;
  }
  public putSeLinux(value: PodSecurityPolicySpecSeLinux) {
    this._seLinux.internalValue = value;
  }
  public resetSeLinux() {
    this._seLinux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxInput() {
    return this._seLinux.internalValue;
  }

  // supplemental_groups - computed: false, optional: false, required: true
  private _supplementalGroups = new PodSecurityPolicySpecSupplementalGroupsOutputReference(this as any, "supplemental_groups", true);
  public get supplementalGroups() {
    return this._supplementalGroups;
  }
  public putSupplementalGroups(value: PodSecurityPolicySpecSupplementalGroups) {
    this._supplementalGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html kubernetes_pod_security_policy}
*/
export class PodSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_pod_security_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html kubernetes_pod_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PodSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PodSecurityPolicyMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PodSecurityPolicyMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PodSecurityPolicySpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PodSecurityPolicySpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: podSecurityPolicyMetadataToTerraform(this._metadata.internalValue),
      spec: podSecurityPolicySpecToTerraform(this._spec.internalValue),
    };
  }
}
