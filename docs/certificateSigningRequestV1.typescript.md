# `certificateSigningRequestV1` Submodule <a name="`certificateSigningRequestV1` Submodule" id="@cdktf/provider-kubernetes.certificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateSigningRequestV1 <a name="CertificateSigningRequestV1" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

new certificateSigningRequestV1.CertificateSigningRequestV1(scope: Construct, id: string, config: CertificateSigningRequestV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config">CertificateSigningRequestV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config">CertificateSigningRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetAutoApprove">resetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata"></a>

```typescript
public putMetadata(value: CertificateSigningRequestV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec"></a>

```typescript
public putSpec(value: CertificateSigningRequestV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificateSigningRequestV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

---

##### `resetAutoApprove` <a name="resetAutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetAutoApprove"></a>

```typescript
public resetAutoApprove(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateSigningRequestV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificateSigningRequestV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateSigningRequestV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateSigningRequestV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateSigningRequestV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference">CertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference">CertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference">CertificateSigningRequestV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApproveInput">autoApproveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadata"></a>

```typescript
public readonly metadata: CertificateSigningRequestV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference">CertificateSigningRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.spec"></a>

```typescript
public readonly spec: CertificateSigningRequestV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference">CertificateSigningRequestV1SpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateSigningRequestV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference">CertificateSigningRequestV1TimeoutsOutputReference</a>

---

##### `autoApproveInput`<sup>Optional</sup> <a name="autoApproveInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApproveInput"></a>

```typescript
public readonly autoApproveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: CertificateSigningRequestV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.specInput"></a>

```typescript
public readonly specInput: CertificateSigningRequestV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificateSigningRequestV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

---

##### `autoApprove`<sup>Required</sup> <a name="autoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateSigningRequestV1Config <a name="CertificateSigningRequestV1Config" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

const certificateSigningRequestV1Config: certificateSigningRequestV1.CertificateSigningRequestV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically approve the CertificateSigningRequest. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#id CertificateSigningRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.metadata"></a>

```typescript
public readonly metadata: CertificateSigningRequestV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#metadata CertificateSigningRequestV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.spec"></a>

```typescript
public readonly spec: CertificateSigningRequestV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#spec CertificateSigningRequestV1#spec}

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically approve the CertificateSigningRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#auto_approve CertificateSigningRequestV1#auto_approve}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#id CertificateSigningRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateSigningRequestV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#timeouts CertificateSigningRequestV1#timeouts}

---

### CertificateSigningRequestV1Metadata <a name="CertificateSigningRequestV1Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

const certificateSigningRequestV1Metadata: certificateSigningRequestV1.CertificateSigningRequestV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#annotations CertificateSigningRequestV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#generate_name CertificateSigningRequestV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#labels CertificateSigningRequestV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#name CertificateSigningRequestV1#name}

---

### CertificateSigningRequestV1Spec <a name="CertificateSigningRequestV1Spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

const certificateSigningRequestV1Spec: certificateSigningRequestV1.CertificateSigningRequestV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.request">request</a></code> | <code>string</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.signerName">signerName</a></code> | <code>string</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.usages">usages</a></code> | <code>string[]</code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#request CertificateSigningRequestV1#request}

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.signerName"></a>

```typescript
public readonly signerName: string;
```

- *Type:* string

signerName indicates the requested signer, and is a qualified name.

List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.

Well-known Kubernetes signers are:
 1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
  Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
 2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
  Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
 3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
  Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.

More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers

Custom signerNames can also be specified. The signer defines:
 1. Trust distribution: how trust (CA bundles) are distributed.
 2. Permitted subjects: and behavior when a disallowed subject is requested.
 3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
 4. Required, permitted, or forbidden key usages / extended key usages.
 5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
 6. Whether or not requests for CA certificates are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#signer_name CertificateSigningRequestV1#signer_name}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

usages specifies a set of key usages requested in the issued certificate.

Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".

Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".

Valid values are:
 "signing", "digital signature", "content commitment",
 "key encipherment", "key agreement", "data encipherment",
 "cert sign", "crl sign", "encipher only", "decipher only", "any",
 "server auth", "client auth",
 "code signing", "email protection", "s/mime",
 "ipsec end system", "ipsec tunnel", "ipsec user",
 "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#usages CertificateSigningRequestV1#usages}

---

### CertificateSigningRequestV1Timeouts <a name="CertificateSigningRequestV1Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

const certificateSigningRequestV1Timeouts: certificateSigningRequestV1.CertificateSigningRequestV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#create CertificateSigningRequestV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request_v1#create CertificateSigningRequestV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateSigningRequestV1MetadataOutputReference <a name="CertificateSigningRequestV1MetadataOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

new certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateSigningRequestV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---


### CertificateSigningRequestV1SpecOutputReference <a name="CertificateSigningRequestV1SpecOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

new certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resetUsages">resetUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsages` <a name="resetUsages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```typescript
public resetUsages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerNameInput">signerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerName">signerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `signerNameInput`<sup>Optional</sup> <a name="signerNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```typescript
public readonly signerNameInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```typescript
public readonly signerName: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateSigningRequestV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---


### CertificateSigningRequestV1TimeoutsOutputReference <a name="CertificateSigningRequestV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequestV1 } from '@cdktf/provider-kubernetes'

new certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateSigningRequestV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

---



