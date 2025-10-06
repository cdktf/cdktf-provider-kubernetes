# `certificateSigningRequest` Submodule <a name="`certificateSigningRequest` Submodule" id="@cdktf/provider-kubernetes.certificateSigningRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateSigningRequest <a name="CertificateSigningRequest" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request kubernetes_certificate_signing_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

new certificateSigningRequest.CertificateSigningRequest(scope: Construct, id: string, config: CertificateSigningRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove">resetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata"></a>

```typescript
public putMetadata(value: CertificateSigningRequestMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec"></a>

```typescript
public putSpec(value: CertificateSigningRequestSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificateSigningRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

---

##### `resetAutoApprove` <a name="resetAutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove"></a>

```typescript
public resetAutoApprove(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

certificateSigningRequest.CertificateSigningRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

certificateSigningRequest.CertificateSigningRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

certificateSigningRequest.CertificateSigningRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

certificateSigningRequest.CertificateSigningRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateSigningRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateSigningRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateSigningRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput">autoApproveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata"></a>

```typescript
public readonly metadata: CertificateSigningRequestMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec"></a>

```typescript
public readonly spec: CertificateSigningRequestSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateSigningRequestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a>

---

##### `autoApproveInput`<sup>Optional</sup> <a name="autoApproveInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput"></a>

```typescript
public readonly autoApproveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput"></a>

```typescript
public readonly metadataInput: CertificateSigningRequestMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput"></a>

```typescript
public readonly specInput: CertificateSigningRequestSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificateSigningRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

---

##### `autoApprove`<sup>Required</sup> <a name="autoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateSigningRequestConfig <a name="CertificateSigningRequestConfig" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

const certificateSigningRequestConfig: certificateSigningRequest.CertificateSigningRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically approve the CertificateSigningRequest. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata"></a>

```typescript
public readonly metadata: CertificateSigningRequestMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#metadata CertificateSigningRequest#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec"></a>

```typescript
public readonly spec: CertificateSigningRequestSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#spec CertificateSigningRequest#spec}

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically approve the CertificateSigningRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#auto_approve CertificateSigningRequest#auto_approve}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateSigningRequestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#timeouts CertificateSigningRequest#timeouts}

---

### CertificateSigningRequestMetadata <a name="CertificateSigningRequestMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

const certificateSigningRequestMetadata: certificateSigningRequest.CertificateSigningRequestMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name">name</a></code> | <code>string</code> | Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#annotations CertificateSigningRequest#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#generate_name CertificateSigningRequest#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#labels CertificateSigningRequest#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#name CertificateSigningRequest#name}

---

### CertificateSigningRequestSpec <a name="CertificateSigningRequestSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

const certificateSigningRequestSpec: certificateSigningRequest.CertificateSigningRequestSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request">request</a></code> | <code>string</code> | Base64-encoded PKCS#10 CSR data. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName">signerName</a></code> | <code>string</code> | Requested signer for the request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages">usages</a></code> | <code>string[]</code> | allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12. |

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

Base64-encoded PKCS#10 CSR data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#request CertificateSigningRequest#request}

---

##### `signerName`<sup>Optional</sup> <a name="signerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName"></a>

```typescript
public readonly signerName: string;
```

- *Type:* string

Requested signer for the request.

It is a qualified name in the form: `scope-hostname.io/name`.If empty, it will be defaulted: 1. If it's a kubelet client certificate, it is assigned `kubernetes.io/kube-apiserver-client-kubelet`.2. If it's a kubelet serving certificate, it is assigned `kubernetes.io/kubelet-serving`.3. Otherwise, it is assigned `kubernetes.io/legacy-unknown`. Distribution of trust for signers happens out of band.You can select on this field using `spec.signerName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#signer_name CertificateSigningRequest#signer_name}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12.

Valid values are:
 "signing",
 "digital signature",
 "content commitment",
 "key encipherment",
 "key agreement",
 "data encipherment",
 "cert sign",
 "crl sign",
 "encipher only",
 "decipher only",
 "any",
 "server auth",
 "client auth",
 "code signing",
 "email protection",
 "s/mime",
 "ipsec end system",
 "ipsec tunnel",
 "ipsec user",
 "timestamping",
 "ocsp signing",
 "microsoft sgc",
 "netscape sgc"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#usages CertificateSigningRequest#usages}

---

### CertificateSigningRequestTimeouts <a name="CertificateSigningRequestTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

const certificateSigningRequestTimeouts: certificateSigningRequest.CertificateSigningRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateSigningRequestMetadataOutputReference <a name="CertificateSigningRequestMetadataOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

new certificateSigningRequest.CertificateSigningRequestMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateSigningRequestMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---


### CertificateSigningRequestSpecOutputReference <a name="CertificateSigningRequestSpecOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

new certificateSigningRequest.CertificateSigningRequestSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName">resetSignerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages">resetUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignerName` <a name="resetSignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName"></a>

```typescript
public resetSignerName(): void
```

##### `resetUsages` <a name="resetUsages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages"></a>

```typescript
public resetUsages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput">signerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName">signerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `signerNameInput`<sup>Optional</sup> <a name="signerNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput"></a>

```typescript
public readonly signerNameInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName"></a>

```typescript
public readonly signerName: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateSigningRequestSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---


### CertificateSigningRequestTimeoutsOutputReference <a name="CertificateSigningRequestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificateSigningRequest } from '@cdktf/provider-kubernetes'

new certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateSigningRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

---



